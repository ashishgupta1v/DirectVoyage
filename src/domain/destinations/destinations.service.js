import { DESTINATIONS } from './destinations.data.js';

export class DestinationsService {
  static getAll() {
    return DESTINATIONS;
  }

  static getById(id) {
    return DESTINATIONS.find(d => d.id.toLowerCase() === id.toLowerCase() || d.name.toLowerCase() === id.toLowerCase());
  }

  static formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
  }
}
