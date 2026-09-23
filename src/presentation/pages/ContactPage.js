/**
 * Direct Voyage — Contact & Concierge Booking Page
 * Direct WhatsApp trigger, quote request builder, office addresses, and hours.
 */

import { BookingSection } from '../components/BookingSection.js';
import { FinaleCTA } from '../components/Footer.js';

export function ContactPage() {
  return `
    <div class="page page-contact">
      <section class="page-hero">
        <div class="wrap">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span class="sep">/</span>
            <span class="current">Contact</span>
          </nav>
          <p class="eyebrow" style="color:var(--c-gold);margin-bottom:8px;">Direct DMC Concierge</p>
          <h1 class="page-title">Connect with Direct Voyage</h1>
          <p class="page-subtitle">
            Speak directly with the team operating your vehicles and coordinating your accommodations. No call centers, no waiting on third-party broker tickets.
          </p>
          <div class="page-meta-row">
            <span class="page-meta-pill">&lt; 15-Min WhatsApp SLA</span>
            <span class="page-meta-pill">Chandigarh Corporate HQ</span>
            <span class="page-meta-pill">Singapore Regional Office</span>
            <span class="page-meta-pill">Mon–Sun · 9 AM – 9 PM IST</span>
          </div>
        </div>
      </section>

      ${BookingSection()}

      ${FinaleCTA()}
    </div>
  `;
}
