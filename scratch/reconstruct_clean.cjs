const fs = require('fs');
const path = require('path');

const orig = fs.readFileSync('original_restored.html', 'utf8');

// 1. Extract CSS
const c1 = orig.indexOf('<style>') + 7;
const c2 = orig.indexOf('</style>');
const css = orig.slice(c1, c2).trim();

fs.writeFileSync('src/styles/main.css', css + '\n');
console.log('Written src/styles/main.css, size:', css.length);

// 2. Extract sections helper
function getSection(startMarker, endMarker) {
  const i1 = orig.indexOf(startMarker);
  if (i1 === -1) throw new Error('Marker not found: ' + startMarker);
  const contentStart = i1 + startMarker.length;
  const i2 = orig.indexOf(endMarker, contentStart);
  if (i2 === -1) throw new Error('End marker not found: ' + endMarker);
  return orig.slice(contentStart, i2).trim();
}

// Markers
const HEADER_HTML = getSection('<!-- ============ HEADER ============ -->', '<!-- ============ HERO ============ -->');
const HERO_HTML = getSection('<!-- ============ HERO ============ -->', '<!-- ============ TRUST STRIP ============ -->');
const TRUST_HTML = getSection('<!-- ============ TRUST STRIP ============ -->', '<!-- ============ ABOUT ============ -->');
const ABOUT_HTML = getSection('<!-- ============ ABOUT ============ -->', '<!-- ============ WHY US ============ -->');
const WHY_HTML = getSection('<!-- ============ WHY US ============ -->', '<!-- ============ SERVICES ============ -->');
const SERVICES_HTML = getSection('<!-- ============ SERVICES ============ -->', '<!-- ============ DESTINATIONS ============ -->');
const DEST_HTML = getSection('<!-- ============ DESTINATIONS ============ -->', '<!-- ============ EXPERIENCES / SPECIALITIES ============ -->');
const EXP_HTML = getSection('<!-- ============ EXPERIENCES / SPECIALITIES ============ -->', '<!-- ============ HOW IT WORKS ============ -->');
const HOW_HTML = getSection('<!-- ============ HOW IT WORKS ============ -->', '<!-- ============ PACKAGES ============ -->');
const PKG_HTML = getSection('<!-- ============ PACKAGES ============ -->', '<!-- ============ PROMISE BANNER ============ -->');
const PROMISE_HTML = getSection('<!-- ============ PROMISE BANNER ============ -->', '<!-- ============ TESTIMONIALS ============ -->');
const TESTIMONIALS_HTML = getSection('<!-- ============ TESTIMONIALS ============ -->', '<!-- ============ BOOKING ============ -->');
const BOOKING_HTML = getSection('<!-- ============ BOOKING ============ -->', '<!-- ============ FAQ ============ -->');
const FAQ_HTML = getSection('<!-- ============ FAQ ============ -->', '<!-- ============ FINAL CTA ============ -->');
const FINALE_HTML = getSection('<!-- ============ FINAL CTA ============ -->', '<!-- ============ FOOTER ============ -->');

// Footer and floating actions
const footStart = orig.indexOf('<!-- ============ FOOTER ============ -->') + '<!-- ============ FOOTER ============ -->'.length;
const scriptStart = orig.indexOf('<script>');
const footAndFloat = orig.slice(footStart, scriptStart).trim();

// Separate footer and floating actions
const floatStart = footAndFloat.indexOf('<!-- floating actions -->');
const FOOTER_HTML = footAndFloat.slice(0, floatStart).trim();
const FLOATING_HTML = footAndFloat.slice(floatStart).trim();

// Helper to escape backticks in template literals
function wrapExport(fnName, html) {
  const safeHtml = html.replace(/`/g, '\\`').replace(/\${/g, '\\${');
  return `export function ${fnName}() {\n  return \`\n${safeHtml}\n\`;\n}\n`;
}

// Write components
// Header.js
const headerFile = `
export function Header() {
  return \`
${HEADER_HTML.replace(/`/g, '\\`').replace(/\${/g, '\\${')}
\`;
}
`;
fs.writeFileSync('src/presentation/components/Header.js', headerFile);

// Hero.js
fs.writeFileSync('src/presentation/components/Hero.js', wrapExport('Hero', HERO_HTML));

// AboutDMC.js (exports TrustStrip, AboutDMC)
const aboutDMCFile = `
export function TrustStrip() {
  return \`
${TRUST_HTML.replace(/`/g, '\\`').replace(/\${/g, '\\${')}
\`;
}

export function AboutDMC() {
  return \`
${ABOUT_HTML.replace(/`/g, '\\`').replace(/\${/g, '\\${')}
\`;
}
`;
fs.writeFileSync('src/presentation/components/AboutDMC.js', aboutDMCFile);

// WhyUs.js (exports WhyUs, ServicesSection)
const whyUsFile = `
export function WhyUs() {
  return \`
${WHY_HTML.replace(/`/g, '\\`').replace(/\${/g, '\\${')}
\`;
}

export function ServicesSection() {
  return \`
${SERVICES_HTML.replace(/`/g, '\\`').replace(/\${/g, '\\${')}
\`;
}
`;
fs.writeFileSync('src/presentation/components/WhyUs.js', whyUsFile);

// DestinationsGrid.js
fs.writeFileSync('src/presentation/components/DestinationsGrid.js', wrapExport('DestinationsGrid', DEST_HTML));

// ExperiencesGrid.js
fs.writeFileSync('src/presentation/components/ExperiencesGrid.js', wrapExport('ExperiencesGrid', EXP_HTML));

// PackagesGrid.js (exports HowItWorks, PackagesGrid)
const packagesGridFile = `
export function HowItWorks() {
  return \`
${HOW_HTML.replace(/`/g, '\\`').replace(/\${/g, '\\${')}
\`;
}

export function PackagesGrid() {
  return \`
${PKG_HTML.replace(/`/g, '\\`').replace(/\${/g, '\\${')}
\`;
}
`;
fs.writeFileSync('src/presentation/components/PackagesGrid.js', packagesGridFile);

// TestimonialsRail.js (exports PromiseBanner, TestimonialsRail)
const testimonialsRailFile = `
export function PromiseBanner() {
  return \`
${PROMISE_HTML.replace(/`/g, '\\`').replace(/\${/g, '\\${')}
\`;
}

export function TestimonialsRail() {
  return \`
${TESTIMONIALS_HTML.replace(/`/g, '\\`').replace(/\${/g, '\\${')}
\`;
}
`;
fs.writeFileSync('src/presentation/components/TestimonialsRail.js', testimonialsRailFile);

// BookingSection.js
fs.writeFileSync('src/presentation/components/BookingSection.js', wrapExport('BookingSection', BOOKING_HTML));

// FaqAccordion.js
fs.writeFileSync('src/presentation/components/FaqAccordion.js', wrapExport('FaqAccordion', FAQ_HTML));

// Footer.js (exports FinaleCTA, Footer, FloatingActions)
const footerFile = `
export function FinaleCTA() {
  return \`
${FINALE_HTML.replace(/`/g, '\\`').replace(/\${/g, '\\${')}
\`;
}

export function Footer() {
  return \`
${FOOTER_HTML.replace(/`/g, '\\`').replace(/\${/g, '\\${')}
\`;
}

export function FloatingActions() {
  return \`
${FLOATING_HTML.replace(/`/g, '\\`').replace(/\${/g, '\\${')}
\`;
}
`;
fs.writeFileSync('src/presentation/components/Footer.js', footerFile);

console.log('All components generated with 100% original fidelity!');
