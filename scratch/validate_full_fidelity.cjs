const fs = require('fs');

const { Header } = require('../src/presentation/components/Header.js');
const { Hero } = require('../src/presentation/components/Hero.js');
const { TrustStrip, AboutDMC } = require('../src/presentation/components/AboutDMC.js');
const { WhyUs, ServicesSection } = require('../src/presentation/components/WhyUs.js');
const { DestinationsGrid } = require('../src/presentation/components/DestinationsGrid.js');
const { ExperiencesGrid } = require('../src/presentation/components/ExperiencesGrid.js');
const { HowItWorks, PackagesGrid } = require('../src/presentation/components/PackagesGrid.js');
const { PromiseBanner, TestimonialsRail } = require('../src/presentation/components/TestimonialsRail.js');
const { BookingSection } = require('../src/presentation/components/BookingSection.js');
const { FaqAccordion } = require('../src/presentation/components/FaqAccordion.js');
const { FinaleCTA, Footer, FloatingActions } = require('../src/presentation/components/Footer.js');
const { HomePage } = require('../src/presentation/pages/HomePage.js');

console.log('Testing full DOM assembly...');

const html = `
  <a class="skip" href="#top">Skip to content</a>
  <div class="grain" aria-hidden="true"></div>
  <div class="progress" id="progress" aria-hidden="true"></div>

  ${Header()}

  <div id="router-view">
    ${HomePage()}
  </div>

  ${Footer()}
  ${FloatingActions()}
`;

console.log('Total assembled HTML length:', html.length);

const checks = [
  // Core Sections
  ['Header (#hdr)', html.includes('id="hdr"')],
  ['Mobile Drawer (#drawer)', html.includes('id="drawer"')],
  ['Hero Section (.hero)', html.includes('class="hero"')],
  ['Trust Strip (.strip)', html.includes('class="strip"')],
  ['About Section (#about)', html.includes('id="about"')],
  ['Supply-Chain Comparison (.chain)', html.includes('class="chain"')],
  ['Why Us Section (#why)', html.includes('id="why"')],
  ['Services Section (#services)', html.includes('id="services"')],
  ['Destinations Section (#destinations)', html.includes('id="destinations"')],
  ['Experiences Section (#experiences)', html.includes('id="experiences"')],
  ['How It Works Section (#how)', html.includes('id="how"')],
  ['Packages Section (#packages)', html.includes('id="packages"')],
  ['Promise Banner (.promise)', html.includes('class="promise"')],
  ['Testimonials Section (#stories)', html.includes('id="stories"')],
  ['Testimonial Rail (#rail)', html.includes('id="rail"')],
  ['Booking Section (#book)', html.includes('id="book"')],
  ['Custom Quote Form (form.js-wa)', html.includes('class="js-wa"')],
  ['FAQ Section (#faq)', html.includes('id="faq"')],
  ['Finale CTA Section (.finale)', html.includes('class="finale"')],
  ['Panorama Skyline (.panorama)', html.includes('class="panorama"')],
  ['Footer (footer)', html.includes('<footer')],
  ['WhatsApp Floating Action (.fab)', html.includes('class="fab"')],
  ['Back to Top Button (#totop)', html.includes('id="totop"')],
  ['Sticky Mobile Action Bar (#mbar)', html.includes('id="mbar"')],

  // Destinations & Visual Art
  ['Singapore Destination Card & Scene', html.includes('The Lion City, Your Way') && html.includes('sgSky')],
  ['Bali Destination Card & Scene', html.includes('Island of the Gods') && html.includes('baSky')],
  ['Thailand Destination Card & Scene', html.includes('Islands, Temples') && html.includes('thSky')],
  ['Vietnam Destination Card & Scene', html.includes('Timeless &amp; Breathtaking') && html.includes('vnSky')],
  ['Dubai Destination Card & Scene', html.includes('Where Luxury Lives') && html.includes('dxSky')],

  // Experiences
  ['01 Family Holidays', html.includes('Family Holidays') && html.includes('01')],
  ['02 Honeymoons & Couples', html.includes('Honeymoons &amp; Couples') && html.includes('02')],
  ['03 Luxury Travel', html.includes('Luxury Travel') && html.includes('03')],
  ['04 Smart Value Trips', html.includes('Smart Value Trips') && html.includes('04')],
  ['05 International Cruises', html.includes('International Cruises') && html.includes('05')],
  ['06 Group & Corporate', html.includes('Group &amp; Corporate') && html.includes('06')],
  ['07 Signature Experiences', html.includes('Signature Experiences') && html.includes('07')],
  ['08 City Breaks', html.includes('City Breaks') && html.includes('08')],

  // Form Fields
  ['Form Full Name field', html.includes('id="b-name"')],
  ['Form Phone field', html.includes('id="b-phone"')],
  ['Form Email field', html.includes('id="b-email"')],
  ['Form Destination dropdown', html.includes('id="b-dest"')],
  ['Form Travel Style dropdown', html.includes('id="b-style"')],
  ['Form Travel Date field', html.includes('id="b-date"')],
  ['Form Nights field', html.includes('id="b-nights"')],
  ['Form Adults field', html.includes('id="b-adults"')],
  ['Form Children field', html.includes('id="b-kids"')],
  ['Form Budget field', html.includes('id="b-budget"')],
  ['Form Notes textarea', html.includes('id="b-msg"')],
  ['Form Honeypot field', html.includes('name="_company"')],

  // Negative checks (ensure foreign broken components are NOT in DOM)
  ['No broken unstyled FleetShowcase', !html.includes('fleet-specs')],
  ['No broken ComparisonMatrix table', !html.includes('comparison-matrix')]
];

let failed = 0;
checks.forEach(([label, pass]) => {
  if (pass) {
    console.log(`✓ PASS: ${label}`);
  } else {
    console.error(`✗ FAIL: ${label}`);
    failed++;
  }
});

const svgCount = (html.match(/<svg/g) || []).length;
console.log(`\nTotal SVGs rendered: ${svgCount}`);

if (failed === 0) {
  console.log(`\n🎉 ALL ${checks.length} VALIDATION CHECKS PASSED WITH 100% FIDELITY!`);
} else {
  console.error(`\n❌ ${failed} checks failed.`);
  process.exit(1);
}
