const fs = require('fs');
const html = fs.readFileSync('index.monolith.html', 'utf8');
const lines = html.split('\n');

console.log('=== LINES 2800 to 2950 ===');
console.log(lines.slice(2800, 2950).join('\n'));
