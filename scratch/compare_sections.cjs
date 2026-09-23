const fs = require('fs');

const monolith = fs.readFileSync('index.monolith.html', 'utf8');

const secRegex = /<!-- ============ ([A-Z0-9\s-]+?) ============ -->([\s\S]*?)(?=<!-- ============|$)/g;
let m;
while (m = secRegex.exec(monolith)) {
  const name = m[1].trim();
  const html = m[2].trim();
  console.log(`\n================== ${name} ==================`);
  console.log(`Length: ${html.length}`);
  // print first 300 chars
  console.log(html.slice(0, 300) + '...');
}
