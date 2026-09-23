const fs = require('fs');
const html = fs.readFileSync('index.monolith.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.toLowerCase().includes('modal') || l.toLowerCase().includes('itinerary')) {
    console.log((i+1) + ': ' + l.trim().substring(0, 100));
  }
});
