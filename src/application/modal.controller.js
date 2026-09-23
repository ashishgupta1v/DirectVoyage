import { DestinationsService } from '../domain/destinations/destinations.service.js';

export class ModalController {
  static init() {
    const modal = document.getElementById('itineraryModal');
    if (!modal) return;

    const closeBtn = document.getElementById('modalCloseBtn');
    const closeFooter = document.getElementById('modalCloseFooter');
    const customizeBtn = document.getElementById('modalCustomizeBtn');
    const titleEl = document.getElementById('modalTitle');
    const daysContainer = document.getElementById('modalDaysContainer');

    // Tab switching inside modal
    const tabBtns = modal.querySelectorAll('.modal-tab-btn');
    const tabPanels = {
      itinerary: document.getElementById('modalTabContentItinerary'),
      inclusions: document.getElementById('modalTabContentInclusions'),
      pricing: document.getElementById('modalTabContentPricing')
    };

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.getAttribute('data-tab');
        Object.keys(tabPanels).forEach(key => {
          if (tabPanels[key]) {
            tabPanels[key].style.display = key === tab ? 'block' : 'none';
          }
        });
      });
    });

    function openModal(destId) {
      const dest = DestinationsService.getById(destId);
      if (!dest) return;

      titleEl.textContent = `${dest.name} — Handcrafted ${dest.nights} Voyage`;
      customizeBtn.setAttribute('data-dest', dest.name);
      customizeBtn.setAttribute('data-plan', `${dest.name} Custom Plan`);

      // Reset tabs to itinerary
      tabBtns.forEach((b, i) => b.classList.toggle('active', i === 0));
      if (tabPanels.itinerary) tabPanels.itinerary.style.display = 'block';
      if (tabPanels.inclusions) tabPanels.inclusions.style.display = 'none';
      if (tabPanels.pricing) tabPanels.pricing.style.display = 'none';

      daysContainer.innerHTML = dest.sampleItinerary.map(item => `
        <div class="day-card">
          <div class="day-card-header">
            <span class="day-tag">Day ${item.day}</span>
            <span class="fineprint" style="color:var(--faint)">Direct Voyage DMC</span>
          </div>
          <h4 class="day-title">${item.title}</h4>
          <p class="day-desc">${item.desc}</p>
        </div>
      `).join('');

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    // Attach view itinerary triggers
    document.querySelectorAll('.js-view-itinerary').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const destId = e.currentTarget.getAttribute('data-dest-id');
        openModal(destId);
      });
    });

    closeBtn?.addEventListener('click', closeModal);
    closeFooter?.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });

    customizeBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
      const destName = customizeBtn.getAttribute('data-dest');
      const bDest = document.getElementById('b-dest');
      if (bDest && destName) {
        bDest.value = destName;
      }
      const bookSec = document.getElementById('book');
      if (bookSec) {
        bookSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
