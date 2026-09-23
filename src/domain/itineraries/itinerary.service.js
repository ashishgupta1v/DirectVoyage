import { PACKAGES } from './packages.data.js';

export class ItineraryService {
  static getAllPackages() {
    return PACKAGES;
  }

  static getPackageById(id) {
    return PACKAGES.find(p => p.id === id || p.name.toLowerCase() === id.toLowerCase());
  }
}
