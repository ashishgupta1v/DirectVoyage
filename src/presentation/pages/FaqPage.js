/**
 * Direct Voyage — FAQ Knowledgebase Page
 * Searchable FAQ index, categorized accordions, and direct support link.
 */

import { FaqAccordion } from '../components/FaqAccordion.js';
import { FinaleCTA } from '../components/Footer.js';

export function FaqPage() {
  return `
    <div class="page page-faq">
      <section class="page-hero">
        <div class="wrap">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span class="sep">/</span>
            <span class="current">FAQ</span>
          </nav>
          <p class="eyebrow" style="color:var(--c-gold);margin-bottom:8px;">Knowledgebase &amp; Clarity</p>
          <h1 class="page-title">Frequently Asked Questions</h1>
          <p class="page-subtitle">
            Everything you need to know about booking directly with an on-ground DMC. Transparent pricing, private vehicle operations, visa processes, and flexible payment stages.
          </p>
          <div class="page-meta-row">
            <span class="page-meta-pill">Instant Searchable Knowledge</span>
            <span class="page-meta-pill">Visa &amp; Entry Guidance</span>
            <span class="page-meta-pill">Transparent Inclusions</span>
            <span class="page-meta-pill">Zero Hidden Tiers</span>
          </div>
        </div>
      </section>

      ${FaqAccordion()}

      <!-- Still have questions banner -->
      <section class="faq-cta-section" style="padding: 0 0 clamp(60px, 8vw, 100px);">
        <div class="wrap">
          <div class="glass-surface-card" style="padding:clamp(28px, 4vw, 44px);text-align:center;">
            <h3 style="font-size:clamp(1.25rem, 2.5vw, 1.6rem);color:var(--gold-soft);margin-bottom:12px;font-family:var(--serif);">Have a specific requirement or uncommon destination?</h3>
            <p style="font-size:0.95rem;color:rgba(248,245,238,0.85);max-width:580px;margin:0 auto 24px;line-height:1.6;">
              Our direct DMC coordinators are available on WhatsApp 7 days a week to answer questions regarding flight connections, dietary requirements, or custom routes.
            </p>
            <a href="https://wa.me/919888181890?text=Hi%20Direct%20Voyage%2C%20I%20have%20a%20question%20about%20your%20services" target="_blank" rel="noopener" class="btn btn-gold">
              Chat with our Desk (+91 98881 81890)
            </a>
          </div>
        </div>
      </section>

      ${FinaleCTA()}
    </div>
  `;
}
