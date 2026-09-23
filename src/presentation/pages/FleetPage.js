/**
 * Direct Voyage — Fleet & Ground Operations Page
 * Executive vehicle showcase, chauffeur protocols, and private transfer inquiry.
 */

import { FleetShowcase } from '../components/FleetShowcase.js';
import { FinaleCTA } from '../components/Footer.js';

export function FleetPage() {
  return `
    <div class="page page-fleet">
      <section class="page-hero">
        <div class="wrap">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span class="sep">/</span>
            <span class="current">Our Fleet</span>
          </nav>
          <p class="eyebrow" style="color:var(--c-gold);margin-bottom:8px;">Direct On-Ground Assets</p>
          <h1 class="page-title">Executive Fleet &amp; Ground Operations</h1>
          <p class="page-subtitle">
            Unlike online travel agents who subcontract your family to unvetted third-party taxi apps, Direct Voyage deploys dedicated executive vehicles and uniformed chauffeurs across our destinations.
          </p>
          <div class="page-meta-row">
            <span class="page-meta-pill">VIP Toyota Alphards</span>
            <span class="page-meta-pill">Toyota Innova Crystas</span>
            <span class="page-meta-pill">Luxury Commuter Vans</span>
            <span class="page-meta-pill">Private Yacht Charters</span>
          </div>
        </div>
      </section>

      ${FleetShowcase()}

      <!-- Chauffeur & Ground Standards Section -->
      <section class="fleet-standards-section" style="padding-top:20px;padding-bottom:clamp(60px, 8vw, 100px);">
        <div class="wrap">
          <div class="glass-surface-card">
            <div class="sec-head" style="margin-bottom:30px;">
              <p class="eyebrow" style="color:var(--gold-soft);">The Direct Voyage Guarantee</p>
              <h2 class="h-md" style="color:var(--gold-soft);">Chauffeur Standards &amp; Airport Operations</h2>
              <p class="lead" style="font-size:0.95rem;color:rgba(248,245,238,0.85);">
                Every journey begins with complete peace of mind. Here is how our on-ground ops desk operates every day:
              </p>
            </div>

            <div class="cards c4 stagger rv">
              <div style="border-left:3px solid var(--gold);padding-left:16px;">
                <h4 style="font-size:1.05rem;color:var(--gold-light);margin-bottom:6px;">Live Flight Radar Tracking</h4>
                <p style="font-size:0.88rem;color:rgba(248,245,238,0.82);line-height:1.55;">We monitor incoming flights in real time. Even if your flight is delayed by 3 hours, your driver is stationed and waiting at the arrival terminal with zero extra waiting penalties.</p>
              </div>
              <div style="border-left:3px solid var(--gold);padding-left:16px;">
                <h4 style="font-size:1.05rem;color:var(--gold-light);margin-bottom:6px;">English-Speaking Chauffeurs</h4>
                <p style="font-size:0.88rem;color:rgba(248,245,238,0.82);line-height:1.55;">All Direct Voyage drivers undergo rigorous background checks, etiquette training, and possess functional English fluency for seamless communication throughout your voyage.</p>
              </div>
              <div style="border-left:3px solid var(--gold);padding-left:16px;">
                <h4 style="font-size:1.05rem;color:var(--gold-light);margin-bottom:6px;">VIP Fast-Track Clearance</h4>
                <p style="font-size:0.88rem;color:rgba(248,245,238,0.82);line-height:1.55;">Available at Bangkok (BKK/DMK), Bali (DPS), and Dubai (DXB) — skip the standard immigration queues with personal escorts directly to your waiting vehicle.</p>
              </div>
              <div style="border-left:3px solid var(--gold);padding-left:16px;">
                <h4 style="font-size:1.05rem;color:var(--gold-light);margin-bottom:6px;">Pristine Fleet Hygiene</h4>
                <p style="font-size:0.88rem;color:rgba(248,245,238,0.82);line-height:1.55;">Every vehicle is professionally sanitized before dispatch, stocked with chilled bottled mineral water, refreshing cold towels, and mobile charging cables.</p>
              </div>
            </div>

            <div style="margin-top:36px;text-align:center;background:rgba(201,162,75,0.08);padding:24px;border-radius:12px;border:1px dashed rgba(201,162,75,0.35);">
              <p style="font-size:1rem;color:var(--gold-light);margin-bottom:14px;font-weight:500;">
                Need an airport transfer, multi-day chauffeur, or bespoke vehicle rental?
              </p>
              <a href="/contact" class="btn btn-gold">Inquire About Fleet Charters</a>
            </div>
          </div>
        </div>
      </section>

      ${FinaleCTA()}
    </div>
  `;
}
