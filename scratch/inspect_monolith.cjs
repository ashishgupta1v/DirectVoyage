const fs = require('fs');

const monolith = fs.readFileSync('index.monolith.html', 'utf8');

console.log('=== SECTIONS IN index.monolith.html ===');
const sectionMatches = monolith.match(/<!--\s*============\s*([A-Z0-9\s-]+?)\s*============\s*-->/g);
if (sectionMatches) {
  sectionMatches.forEach(m => console.log(m));
}

console.log('\n=== SECTION TAGS ===');
const secTagMatches = [...monolith.matchAll(/<section\s+([^>]*?)>/g)];
secTagMatches.forEach(m => console.log('<section ' + m[1] + '>'));
