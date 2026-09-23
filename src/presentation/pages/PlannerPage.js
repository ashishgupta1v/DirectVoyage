/**
 * Direct Voyage — Interactive Trip Cost Estimator Page
 * Real-time budget simulation, nights slider, luxury tier selector, and instant custom voyage dispatch.
 */

import { InteractivePlanner } from '../components/InteractivePlanner.js';
import { FinaleCTA } from '../components/Footer.js';

export function PlannerPage() {
  return `
    <div class="page page-planner">
      <section class="page-hero">
        <div class="wrap">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span class="sep">/</span>
            <span class="current">Trip Planner</span>
          </nav>
          <p class="eyebrow" style="color:var(--c-gold);margin-bottom:8px;">Live Cost Calculator</p>
          <h1 class="page-title">Interactive Trip Cost Estimator</h1>
          <p class="page-subtitle">
            Get an instant, transparent estimate for your customized journey. Adjust nights, select your preferred luxury tier, and configure your party size with real direct-DMC rates.
          </p>
          <div class="page-meta-row">
            <span class="page-meta-pill">Instant Live Calculation</span>
            <span class="page-meta-pill">Direct Land Rates</span>
            <span class="page-meta-pill">One-Click WhatsApp Dispatch</span>
            <span class="page-meta-pill">Zero Hidden Fees</span>
          </div>
        </div>
      </section>

      ${InteractivePlanner()}

      <!-- Transparent Costing Notes -->
      <section class="costing-notes-section" style="padding: 0 0 clamp(60px, 8vw, 100px);">
        <div class="wrap">
          <div class="glass-surface-card">
            <h3 style="font-size:1.3rem;margin-bottom:18px;color:var(--gold-soft);font-family:var(--serif);">How Our Direct DMC Costing Works</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:24px;font-size:0.92rem;line-height:1.6;">
              <div style="background:rgba(10,37,64,0.4);padding:20px;border-radius:12px;border:1px solid rgba(201,162,75,0.18);">
                <strong style="display:block;margin-bottom:6px;color:var(--gold-light);">Land-Only Flexibility</strong>
                Estimates include handpicked luxury hotels, daily breakfast, private executive vehicle transfers with English-speaking chauffeurs, and pre-booked attractions. International flights can be added or booked by you.
              </div>
              <div style="background:rgba(10,37,64,0.4);padding:20px;border-radius:12px;border:1px solid rgba(201,162,75,0.18);">
                <strong style="display:block;margin-bottom:6px;color:var(--gold-light);">Direct Contractor Rates</strong>
                Because Direct Voyage holds direct wholesale contracts with 5-star properties and operates its own vehicle fleets, you save between 15% and 25% compared to online broker markups.
              </div>
              <div style="background:rgba(10,37,64,0.4);padding:20px;border-radius:12px;border:1px solid rgba(201,162,75,0.18);">
                <strong style="display:block;margin-bottom:6px;color:var(--gold-light);">Zero Surcharge Revisions</strong>
                Once you click "Book This Custom Voyage", our concierge sends a detailed PDF itinerary. We offer unlimited free revisions until your schedule is 100% perfect.
              </div>
            </div>
          </div>
        </div>
      </section>

      ${FinaleCTA()}
    </div>
  `;
}
