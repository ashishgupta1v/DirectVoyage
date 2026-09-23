import { FaqSearchService } from '../domain/faq/faq-search.service.js';

export class FaqController {
  static init() {
    const container = document.getElementById('faqAccordionContainer');
    const searchInput = document.getElementById('faqSearchInput');

    if (!container) return;

    // Toggle Accordion Item
    container.addEventListener('click', (e) => {
      const btn = e.target.closest('.acc-q');
      if (!btn) return;
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
    });

    // Search filter
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const results = FaqSearchService.search(query);
        const resultIds = new Set(results.map(r => r.id));

        container.querySelectorAll('.acc').forEach(acc => {
          const id = acc.getAttribute('data-faq-id');
          if (resultIds.has(id)) {
            acc.style.display = 'block';
            if (query.length > 1) {
              const btn = acc.querySelector('.acc-q');
              if (btn) btn.setAttribute('aria-expanded', 'true');
            }
          } else {
            acc.style.display = 'none';
          }
        });
      });
    }
  }
}
