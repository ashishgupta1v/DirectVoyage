/**
 * Direct Voyage — Destination Detail Page
 * Deep-dive day-by-day itineraries, bespoke vector scenes, pricing, inclusions, and direct booking triggers.
 */

import { DestinationsService } from '../../domain/destinations/destinations.service.js';
import { getDestinationScene } from '../svgs/destination-scenes.js';
import { FinaleCTA } from '../components/Footer.js';
import { Icon } from '../components/Icon.js';

export function DestinationDetailPage(params) {
  const id = params?.id || '';
  const destination = DestinationsService.getById(id);

  if (!destination) {
    return `
      <div class="page page-dest-detail">
        <section class="page-hero">
          <div class="wrap">
            <nav class="breadcrumbs">
              <a href="/">Home</a>
              <span class="sep">/</span>
              <a href="/destinations">Destinations</a>
              <span class="sep">/</span>
              <span class="current">Not Found</span>
            </nav>
            <h1 class="page-title">Destination Not Found</h1>
            <p class="page-subtitle">We couldn't find the destination you're looking for. Explore our core direct hubs:</p>
            <div style="margin-top:20px;">
              <a href="/destinations" class="btn btn-gold">View All Destinations</a>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  const allDestinations = DestinationsService.getAll().filter(d => d.id !== destination.id);
  const defaultTravellers = 2;
  const defaultMonth = 'Flexible Dates';
  const defaultTotal = DestinationsService.formatCurrency(destination.fromPrice * defaultTravellers);
  const waCustomMessage = encodeURIComponent(
    `Hi Direct Voyage Concierge, I am interested in planning a customized voyage to ${destination.name} for ${defaultTravellers} travellers (${destination.nights}, travel: ${defaultMonth}). Estimated total: ${defaultTotal}. Please share the detailed itinerary.`
  );
  const waUrl = `https://wa.me/919888181890?text=${waCustomMessage}`;

  // Helper for contextual day badges & tags
  function getDayMeta(dayNum, totalDays, title, desc) {
    const text = `${title} ${desc}`.toLowerCase();
    let theme = 'Curated Sightseeing';
    let tags = ['Dedicated Chauffeur', 'Sightseeing Entry'];

    if (dayNum === 1 || text.includes('arrival') || text.includes('airport')) {
      theme = 'Airport Welcome & Private Transfer';
      tags = ['Direct Fleet Chauffeur', 'VIP Airport Meet & Greet', 'Welcome Dinner'];
    } else if (dayNum === totalDays || text.includes('departure')) {
      theme = 'Departure Concierge & Transfer';
      tags = ['Direct Chauffeur Transfer', 'Airport Farewell', 'Breakfast Included'];
    } else if (text.includes('beach') || text.includes('island') || text.includes('cruise') || text.includes('waterfall')) {
      theme = 'Signature Coastal & Island Excursion';
      tags = ['Private Fleet Transfer', 'Guided Sights', 'Scenic Leisure'];
    } else if (text.includes('heritage') || text.includes('culture') || text.includes('temple')) {
      theme = 'Cultural Heritage & Guided Walk';
      tags = ['Private Chauffeur', 'Expert Local Insight', 'Authentic Dining'];
    }

    return { theme, tags };
  }

  // Schema.org TouristTrip structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": `${destination.name} Curated Voyage`,
    "description": destination.description,
    "touristType": ["Luxury", "Family", "Couples", "Bespoke"],
    "offers": {
      "@type": "Offer",
      "price": destination.fromPrice,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01"
    },
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": destination.sampleItinerary.length,
      "itemListElement": destination.sampleItinerary.map(item => ({
        "@type": "ListItem",
        "position": item.day,
        "name": `Day ${item.day}: ${item.title}`,
        "description": item.desc
      }))
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "Direct Voyage",
      "telephone": "+919888181890",
      "url": "https://directvoyage.com"
    }
  };

  return `
    <script type="application/ld+json">
      ${JSON.stringify(jsonLd)}
    </script>

    <div class="page page-dest-detail" data-dest-id="${destination.id}" data-base-price="${destination.fromPrice}" data-dest-name="${destination.name}" data-dest-nights="${destination.nights}">
      <section class="page-hero">
        <div class="wrap">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span class="sep">/</span>
            <a href="/destinations">Destinations</a>
            <span class="sep">/</span>
            <span class="current">${destination.name}</span>
          </nav>
          <p class="eyebrow" style="color:var(--c-gold);margin-bottom:8px;">${destination.tagline}</p>
          <h1 class="page-title">${destination.name} Curated Voyage</h1>
          <p class="page-subtitle">${destination.description}</p>
          <div class="page-meta-row">
            <span class="page-meta-pill">From ${destination.formattedPrice} per person</span>
            <span class="page-meta-pill">${Icon('calendar', { size: 14, style: 'margin-right:5px;' })} ${destination.nights}</span>
            <span class="page-meta-pill">${Icon('clock', { size: 14, style: 'margin-right:5px;' })} Best: ${destination.bestSeason}</span>
            <span class="page-meta-pill">${Icon('shield', { size: 14, style: 'margin-right:5px;' })} Direct On-Ground Fleet</span>
          </div>
        </div>
      </section>

      <section class="detail-section" style="padding: clamp(30px, 5vw, 60px) 0;">
        <div class="wrap detail-layout">
          <!-- Main Itinerary & Inclusions Column -->
          <div class="detail-main">
            <!-- Mobile-only quick summary card (top on mobile) -->
            <div class="dest-mobile-summary" aria-label="Quick Booking Summary">
              <div class="summary-content">
                <div>
                  <div class="summary-label">Direct DMC Starting Rate</div>
                  <div class="summary-price">${destination.formattedPrice}</div>
                  <div style="font-size:0.75rem;color:rgba(248,245,238,0.7);margin-top:2px;">Per person · ${destination.nights} · Land Package</div>
                </div>
                <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-gold btn-sm js-dest-wa-btn">
                  ${Icon('whatsapp', { size: 16 })}
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <!-- Landmark SVG Hero Banner with Glass Frame & Hub Badge -->
            <div style="position:relative;border-radius:18px;overflow:hidden;border:1px solid rgba(201,162,75,0.3);margin-bottom:40px;box-shadow:0 14px 40px rgba(3,13,26,0.4);background:var(--c-navy);">
              <div style="position:absolute;top:16px;left:16px;z-index:2;display:inline-flex;align-items:center;gap:6px;background:rgba(3,13,26,0.85);backdrop-filter:blur(8px);border:1px solid rgba(201,162,75,0.4);padding:6px 14px;border-radius:999px;font-size:0.78rem;color:var(--gold-soft);font-weight:600;">
                ${Icon('shield', { size: 14, style: 'stroke:var(--gold);' })}
                <span>Direct On-Ground Fleet Hub</span>
              </div>
              ${getDestinationScene(destination.id)}
            </div>

            <div class="sec-head" style="margin-bottom:24px;">
              <p class="eyebrow">Handcrafted Day-by-Day Schedule</p>
              <h2 class="h-lg">Curated Sample Itinerary</h2>
              <p class="lead" style="font-size:0.95rem;">
                Every schedule is 100% customizable. Add private yacht charters, helicopter transfers, or extra leisure days with zero broker friction.
              </p>
            </div>

            <!-- Day-by-day Timeline with Enhanced Badges & Activity Tags -->
            <div class="timeline">
              ${destination.sampleItinerary.map(item => {
                const meta = getDayMeta(item.day, destination.sampleItinerary.length, item.title, item.desc);
                return `
                  <div class="timeline-item">
                    <div class="timeline-day-badge">D${item.day}</div>
                    <div class="timeline-card">
                      <div class="timeline-theme-badge">
                        ${Icon('sparkles', { size: 12, style: 'stroke:var(--gold-light);' })}
                        <span>${meta.theme}</span>
                      </div>
                      <h4>Day ${item.day}: ${item.title}</h4>
                      <p>${item.desc}</p>
                      <div class="timeline-tags">
                        ${meta.tags.map(t => `<span class="timeline-tag">${Icon('check', { size: 12, style: 'stroke:var(--gold);' })} ${t}</span>`).join('')}
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- 2-Column Inclusions & Transparent Exclusions -->
            <div class="glass-surface-card" style="margin-top:50px;">
              <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:8px;">
                <h3 style="font-size:1.35rem;color:var(--gold-soft);font-family:var(--serif);margin:0;">Inclusions &amp; Transparent Policy</h3>
                <span class="trust-pill" style="font-size:0.8rem;">
                  ${Icon('shield', { size: 14, style: 'stroke:var(--gold);' })}
                  Zero Hidden Fees Guarantee
                </span>
              </div>
              <p style="font-size:0.9rem;color:rgba(248,245,238,0.75);margin-bottom:20px;">
                Direct Voyage operates with total transparency. Review exactly what is included in your direct DMC land package and what remains optional:
              </p>

              <div class="inclusions-exclusions-grid">
                <!-- Inclusions Column -->
                <div class="inclusions-col">
                  <h4>
                    ${Icon('check', { size: 18, strokeWidth: 2.5, style: 'stroke:var(--gold);' })}
                    <span>Signature Inclusions</span>
                  </h4>
                  <ul class="inclusions-list">
                    ${destination.highlights.map(h => `
                      <li>
                        ${Icon('check', { size: 16, strokeWidth: 2.5, style: 'stroke:var(--gold);flex-shrink:0;margin-top:2px;' })}
                        <span>${h}</span>
                      </li>
                    `).join('')}
                    <li>
                      ${Icon('check', { size: 16, strokeWidth: 2.5, style: 'stroke:var(--gold);flex-shrink:0;margin-top:2px;' })}
                      <span>VIP Airport Meet &amp; Greet with Direct Chauffeur Transfer</span>
                    </li>
                    <li>
                      ${Icon('check', { size: 16, strokeWidth: 2.5, style: 'stroke:var(--gold);flex-shrink:0;margin-top:2px;' })}
                      <span>24/7 Dedicated In-Destination WhatsApp Concierge Support</span>
                    </li>
                    <li>
                      ${Icon('check', { size: 16, strokeWidth: 2.5, style: 'stroke:var(--gold);flex-shrink:0;margin-top:2px;' })}
                      <span>All Tolls, Parking, Fuel &amp; Chauffeur Allowances</span>
                    </li>
                  </ul>
                </div>

                <!-- Transparent Exclusions Column -->
                <div class="exclusions-col">
                  <h4>
                    ${Icon('x', { size: 18, strokeWidth: 2, style: 'stroke:rgba(248,245,238,0.6);' })}
                    <span>Transparent Exclusions</span>
                  </h4>
                  <ul class="exclusions-list">
                    <li>
                      ${Icon('x', { size: 16, strokeWidth: 2, style: 'stroke:rgba(248,245,238,0.5);flex-shrink:0;margin-top:2px;' })}
                      <span>International flights (available as an add-on at net airline fares)</span>
                    </li>
                    <li>
                      ${Icon('x', { size: 16, strokeWidth: 2, style: 'stroke:rgba(248,245,238,0.5);flex-shrink:0;margin-top:2px;' })}
                      <span>Entry visa fees &amp; travel insurance (guided assistance provided)</span>
                    </li>
                    <li>
                      ${Icon('x', { size: 16, strokeWidth: 2, style: 'stroke:rgba(248,245,238,0.5);flex-shrink:0;margin-top:2px;' })}
                      <span>Personal discretionary expenses (laundry, alcoholic beverages, minibar)</span>
                    </li>
                    <li>
                      ${Icon('x', { size: 16, strokeWidth: 2, style: 'stroke:rgba(248,245,238,0.5);flex-shrink:0;margin-top:2px;' })}
                      <span>Peak holiday season surcharges (notified upfront before booking)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Direct Fleet Guarantee Banner -->
              <div class="fleet-guarantee-banner">
                <div class="fleet-badge-icon">
                  ${Icon('shield', { size: 24, style: 'stroke:var(--gold-light);' })}
                </div>
                <div class="fleet-text">
                  <h5>Direct Fleet &amp; Chauffeur Assurance in ${destination.name}</h5>
                  <p>
                    Every vehicle in our ${destination.name} network is company-managed, sanitized, and driven by an English-fluent private chauffeur. No third-party ride hail uncertainties, no broker commissions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Sticky Booking & Interactive Customizer Sidebar -->
          <aside class="detail-sidebar">
            <div class="detail-quote-box">
              <span class="eyebrow" style="color:var(--gold-soft);">Direct DMC Rates</span>
              <h3>Plan Your ${destination.name} Voyage</h3>
              <div class="detail-price-tag" id="sidebar-unit-price">${destination.formattedPrice}</div>
              <div class="detail-price-sub">Starting price per person (land package)</div>

              <!-- Interactive Travellers & Month Estimator -->
              <div class="sidebar-estimator">
                <div class="estimator-row">
                  <span class="estimator-label">${Icon('users', { size: 15, style: 'margin-right:5px;' })} Travellers:</span>
                  <div class="estimator-stepper">
                    <button type="button" id="sidebar-travellers-dec" aria-label="Decrease travellers">−</button>
                    <span class="stepper-value" id="sidebar-travellers-val">2</span>
                    <button type="button" id="sidebar-travellers-inc" aria-label="Increase travellers">+</button>
                  </div>
                </div>

                <div class="estimator-row">
                  <span class="estimator-label">${Icon('calendar', { size: 15, style: 'margin-right:5px;' })} Travel Month:</span>
                  <select class="sidebar-select" id="sidebar-month">
                    <option value="Flexible Dates">Flexible Dates</option>
                    <option value="Next 30 Days">Next 30 Days</option>
                    <option value="October 2026">October 2026</option>
                    <option value="November 2026">November 2026</option>
                    <option value="December 2026">December 2026</option>
                    <option value="January 2027">January 2027</option>
                    <option value="February 2027">February 2027</option>
                  </select>
                </div>

                <div class="sidebar-total-box">
                  <span class="total-label">Estimated Total (2 Travellers):</span>
                  <span class="total-val" id="sidebar-total-val">${defaultTotal}</span>
                </div>
              </div>

              <ul class="detail-perks">
                <li>
                  ${Icon('check', { size: 16, strokeWidth: 2.5 })}
                  <span>Direct on-ground fleet in ${destination.name}</span>
                </li>
                <li>
                  ${Icon('check', { size: 16, strokeWidth: 2.5 })}
                  <span>100% customizable daily schedule</span>
                </li>
                <li>
                  ${Icon('check', { size: 16, strokeWidth: 2.5 })}
                  <span>Zero broker fees &amp; no middleman markup</span>
                </li>
                <li>
                  ${Icon('check', { size: 16, strokeWidth: 2.5 })}
                  <span>Same-day custom quote via WhatsApp</span>
                </li>
              </ul>

              <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-gold btn-block js-dest-wa-btn" id="sidebar-wa-btn" style="margin-top:14px;">
                ${Icon('whatsapp', { size: 18 })}
                <span>Chat on WhatsApp Now</span>
              </a>

              <a href="/contact" class="btn btn-ghost btn-block" style="margin-top:10px;font-size:0.88rem;">
                Request Custom Quote Form
              </a>

              <!-- Trust Guarantee Row -->
              <div class="trust-pills-row">
                <span class="trust-pill">${Icon('shield', { size: 12, style: 'stroke:var(--gold);' })} ₹0 Middleman Markup</span>
                <span class="trust-pill">${Icon('clock', { size: 12, style: 'stroke:var(--gold);' })} &lt; 15 Min Response</span>
              </div>

              <div style="margin-top:20px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.12);font-size:0.82rem;opacity:0.75;text-align:center;">
                Or call our concierge directly: <br/>
                <a href="tel:+919888181890" style="color:var(--gold);font-weight:600;font-size:0.95rem;text-decoration:none;">+91 98881 81890</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <!-- Other Destinations Section with Elevated Preview Cards -->
      <section class="other-destinations-section" style="border-top:1px solid rgba(201,162,75,0.2);padding: clamp(50px, 7vw, 80px) 0;">
        <div class="wrap">
          <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:24px;flex-wrap:wrap;gap:12px;">
            <div>
              <p class="eyebrow" style="color:var(--gold-soft);margin-bottom:4px;">Direct Regional Hubs</p>
              <h3 style="font-size:1.45rem;color:var(--white);margin:0;font-family:var(--font-heading);">Explore Other Handcrafted Voyages</h3>
            </div>
            <a href="/destinations" style="color:var(--gold);font-size:0.9rem;text-decoration:none;font-weight:600;">
              View All 5 Direct Hubs &rarr;
            </a>
          </div>

          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:20px;">
            ${allDestinations.map(other => `
              <a href="/destinations/${other.id}" class="card glass-surface-card" style="text-decoration:none;color:inherit;padding:24px;border-radius:16px;display:flex;flex-direction:column;justify-content:space-between;transition:transform 0.3s ease, box-shadow 0.3s ease;">
                <div>
                  <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;">
                    <div style="font-weight:700;color:var(--gold-light);font-size:1.15rem;font-family:var(--serif);">${other.name}</div>
                    <span style="font-size:0.75rem;padding:2px 8px;border-radius:999px;background:rgba(201,162,75,0.15);color:var(--gold);border:1px solid rgba(201,162,75,0.25);">Direct Fleet</span>
                  </div>
                  <div style="font-size:0.88rem;color:var(--gold);margin-bottom:8px;font-weight:600;">${other.formattedPrice} · ${other.nights}</div>
                  <div style="font-size:0.85rem;color:rgba(248,245,238,0.75);line-height:1.45;margin-bottom:16px;">${other.tagline}</div>
                </div>
                <div style="font-size:0.85rem;color:var(--gold-soft);font-weight:600;display:flex;align-items:center;gap:4px;">
                  <span>Plan ${other.name} Voyage</span>
                  ${Icon('arrow-right', { size: 14, style: 'stroke:var(--gold-soft);' })}
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Persistent Sticky Bottom Bar on Mobile -->
      <div class="dest-sticky-mobile-bar" id="mobile-sticky-bar" aria-label="Quick Mobile Booking Action">
        <div class="bar-inner">
          <div>
            <div class="bar-price" id="mobile-bar-price">${destination.formattedPrice}</div>
            <div class="bar-label">Per person · ${destination.nights}</div>
          </div>
          <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-gold btn-sm js-dest-wa-btn" id="mobile-sticky-wa-btn">
            ${Icon('whatsapp', { size: 16 })}
            <span>Book on WhatsApp</span>
          </a>
        </div>
      </div>

      ${FinaleCTA()}
    </div>
  `;
}
