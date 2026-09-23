import { FAQS } from './faq.data.js';

export class FaqSearchService {
  static getAll() {
    return FAQS;
  }

  static search(query = '', category = 'All') {
    const q = query.toLowerCase().trim();
    return FAQS.filter(faq => {
      const matchCat = category === 'All' || faq.category === category;
      const matchQuery = !q || faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }

  static getCategories() {
    const set = new Set(FAQS.map(f => f.category));
    return ['All', ...Array.from(set)];
  }
}
