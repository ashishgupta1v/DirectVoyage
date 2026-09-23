/**
 * Direct Voyage — Destinations Page Controller
 * Category filtering, real-time search, smooth animated transitions, and modal bindings
 */

import { ModalController } from './modal.controller.js';

export class DestinationsController {
  static init() {
    // Initialize modal listeners for itinerary preview
    ModalController.init();

    const filterPills = document.querySelectorAll('.filter-pill');
    const searchInput = document.getElementById('dest-search-input');
    const cards = document.querySelectorAll('.dest-card');
    const grid = document.querySelector('.dest-grid');

    function applyFilters() {
      const activePill = document.querySelector('.filter-pill.active');
      const category = activePill ? activePill.dataset.filter : 'all';
      const searchTerm = (searchInput ? searchInput.value : '').trim().toLowerCase();
      const isFiltered = category !== 'all' || searchTerm.length > 0;

      if (grid) {
        grid.classList.toggle('is-filtered', isFiltered);
      }

      cards.forEach((card) => {
        const destName = (card.dataset.name || '').toLowerCase();
        const destTags = (card.dataset.tags || '').toLowerCase();
        const destCategory = (card.dataset.category || '').toLowerCase();

        const matchesCategory = category === 'all' || destCategory.includes(category);
        const matchesSearch = !searchTerm || destName.includes(searchTerm) || destTags.includes(searchTerm);

        if (matchesCategory && matchesSearch) {
          card.style.display = '';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'none';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            if (card.style.opacity === '0') {
              card.style.display = 'none';
            }
          }, 150);
        }
      });
    }

    // Category pill listeners
    filterPills.forEach((pill) => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        filterPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        applyFilters();
      });
    });

    // Search input listener
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        applyFilters();
      });
    }

    // Cleanup hook
    return () => {
      // Clean up if needed
    };
  }
}
