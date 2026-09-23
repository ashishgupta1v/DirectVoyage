const fs = require('fs');

const orig = fs.readFileSync('original_restored.html', 'utf8');

// Extract CSS
const c1 = orig.indexOf('<style>');
const c2 = orig.indexOf('</style>');
const css = orig.slice(c1 + 7, c2);
console.log('CSS length:', css.length);

// Extract JS
const j1 = orig.indexOf('<script>');
const j2 = orig.lastIndexOf('</script>');
const js = orig.slice(j1 + 8, j2);
console.log('JS length:', js.length);

// Extract Body
const b1 = orig.indexOf('<body>') + 6;
const b2 = orig.indexOf('<script>');
const bodyHtml = orig.slice(b1, b2).trim();
console.log('Body length:', bodyHtml.length);

// Check sections
const sectionNames = [
  'HEADER',
  'HERO',
  'TRUST STRIP',
  'ABOUT',
  'WHY US',
  'SERVICES',
  'DESTINATIONS',
  'EXPERIENCES / SPECIALITIES',
  'HOW IT WORKS',
  'PACKAGES',
  'PROMISE BANNER',
  'TESTIMONIALS',
  'BOOKING',
  'FAQ',
  'FINAL CTA',
  'FOOTER'
];

sectionNames.forEach(name => {
  const marker = `<!-- ============ ${name} ============ -->`;
  const pos = bodyHtml.indexOf(marker);
  console.log(`Marker "${name}": found at ${pos}`);
});
