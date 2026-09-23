const fs = require('fs');
const html = fs.readFileSync('index.monolith.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('id="how"')) {
    console.log((i+1) + ': ' + l);
    console.log(lines.slice(i, i + 50).join('\n'));
  }
});
