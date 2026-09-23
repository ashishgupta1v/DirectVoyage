/**
 * Direct Voyage — Destinations Catalog Page
 * Interactive category filters, search input, price badges, and detail route links.
 */

import { DestinationsService } from '../../domain/destinations/destinations.service.js';
import { getDestinationScene } from '../svgs/destination-scenes.js';

function getFlagSvg(flag) {
  switch (flag) {
    case 'singapore':
      return `<svg class="flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="8" fill="#ED2939"/><rect y="8" width="24" height="8" fill="#fff"/><circle cx="6" cy="4" r="2.7" fill="#fff"/><circle cx="7.6" cy="4" r="2.7" fill="#ED2939"/><g fill="#fff"><circle cx="9.9" cy="2.2" r=".55"/><circle cx="11.5" cy="3.4" r=".55"/><circle cx="10.9" cy="5.3" r=".55"/><circle cx="8.9" cy="5.3" r=".55"/><circle cx="8.3" cy="3.4" r=".55"/></g></svg>`;
    case 'bali':
      return `<svg class="flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="8" fill="#CE1126"/><rect y="8" width="24" height="8" fill="#fff"/></svg>`;
    case 'thailand':
      return `<svg class="flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" fill="#fff"/><rect width="24" height="2.7" fill="#A51931"/><rect y="13.3" width="24" height="2.7" fill="#A51931"/><rect y="5.3" width="24" height="5.4" fill="#2D2A4A"/></svg>`;
    case 'vietnam':
      return `<svg class="flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" fill="#DA251D"/><path d="M12 3.8 12.94 6.71 15.99 6.7 13.52 8.49 14.47 11.4 12 9.6 9.53 11.4 10.48 8.49 8.01 6.7 11.06 6.71Z" fill="#FF0"/></svg>`;
    case 'dubai':
      return `<svg class="flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="5.34" fill="#00732F"/><rect y="5.34" width="24" height="5.33" fill="#fff"/><rect y="10.67" width="24" height="5.33" fill="#000"/><rect width="6.5" height="16" fill="#CE1126"/></svg>`;
    default:
      return '';
  }
}

export function DestinationsPage() {
  const destinations = DestinationsService.getAll();

  return `
    <div class="page page-destinations">
      <section class="page-hero">
        <div class="wrap">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span class="sep">/</span>
            <span class="current">Destinations</span>
          </nav>
          <h1 class="page-title">Direct On-Ground Destinations</h1>
          <p class="page-subtitle">
            We operate directly in Singapore, Bali, Thailand, Vietnam, and Dubai. Our private fleet, our local operations desk, our verified partners. No third-party brokers, no mystery markups.
          </p>
          <div class="page-meta-row">
            <span class="page-meta-pill">5 Key Hubs</span>
            <span class="page-meta-pill">Direct On-Ground Fleet</span>
            <span class="page-meta-pill">24/7 Operations Desk</span>
            <span class="page-meta-pill">Zero Broker Markups</span>
          </div>
        </div>
      </section>

      <section class="destinations-catalog-section" style="padding: clamp(40px, 5vw, 60px) 0 clamp(60px, 8vw, 100px);">
        <div class="wrap">
          <!-- Category Filter & Search Bar -->
        <div class="filter-bar">
          <div class="filter-pills" role="tablist">
            <button class="filter-pill active" data-filter="all">All Destinations</button>
            <button class="filter-pill" data-filter="island">Island & Beach</button>
            <button class="filter-pill" data-filter="city">City & Skyline</button>
            <button class="filter-pill" data-filter="culture">Culture & Heritage</button>
          </div>

          <div class="filter-search-box">
            <svg class="filter-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="search" id="dest-search-input" class="filter-search-input" placeholder="Search by city, beach, island…" aria-label="Search destinations" />
          </div>
        </div>

        <!-- Destination Cards Grid -->
        <div class="dest-grid stagger rv">
          ${destinations.map(d => {
            let category = 'city';
            if (d.id === 'bali') category = 'island culture';
            else if (d.id === 'thailand') category = 'island city culture';
            else if (d.id === 'vietnam') category = 'culture city';
            else if (d.id === 'singapore' || d.id === 'dubai') category = 'city';

            return `
              <article class="dest dest-card" id="dest-${d.id}" data-name="${d.name}" data-tags="${d.chips.join(' ')}" data-category="${category}">
                ${getDestinationScene(d.id)}
                <div class="scrim"></div>
                <div class="dest-price">
                  <i>From</i>
                  <b>${d.formattedPrice}</b>
                  <span>per person</span>
                </div>
                <div class="dest-body">
                  <p class="dest-flag">
                    ${getFlagSvg(d.flag)}
                    ${d.name}
                  </p>
                  <h3>${d.tagline}</h3>
                  <p>${d.description}</p>
                  <div class="dest-meta">
                    <span>
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>
                      ${d.nights}
                    </span>
                    <span>
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3v3M16 3v3M3 9h18"/><rect x="3" y="5" width="18" height="16" rx="2"/></svg>
                      ${d.bestSeason}
                    </span>
                  </div>
                  <div class="chips">
                    ${d.chips.map(c => `<span class="chip">${c}</span>`).join('')}
                  </div>

                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:auto;padding-top:14px;border-top:1px solid rgba(255,255,255,0.08);">
                    <button type="button" class="btn btn-ghost btn-sm js-view-itinerary" data-dest-id="${d.id}" style="font-size:0.8rem;padding:7px 10px;">
                      Quick Itinerary
                    </button>
                    <a class="btn btn-gold btn-sm" href="/destinations/${d.id}" style="font-size:0.8rem;padding:7px 10px;text-align:center;">
                      Explore ${d.name} &rarr;
                    </a>
                  </div>
                </div>
              </article>
            `;
          }).join('')}
        </div>

        <div class="dest-note rv mt-lg" style="margin-top:40px;">
          <p><strong>Indicative from-prices</strong> · per person on twin sharing, land-only, excluding flights &amp; visa. Final quote depends on season, hotels, and inclusions.</p>
          <p>Need a multi-city voyage or customized dates? <a class="link-arrow" href="/contact" style="vertical-align:middle">Speak to our DMC Concierge <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></p>
        </div>
      </div>
    </section>
  </div>
  `;
}
