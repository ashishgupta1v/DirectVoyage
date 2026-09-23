const fs = require('fs');
const orig = fs.readFileSync('original_restored.html', 'utf8');
const i = orig.indexOf('<!-- BALI');
const i2 = orig.indexOf('<!-- THAILAND');
const baliHtml = orig.slice(i, i2);
const bodyIdx = baliHtml.indexOf('<div class="dest-body">');
console.log('Bali body:');
console.log(baliHtml.slice(bodyIdx, bodyIdx + 600));

const tIdx = orig.indexOf('<!-- THAILAND');
const t2 = orig.indexOf('<!-- VIETNAM');
const thaiHtml = orig.slice(tIdx, t2);
const tBodyIdx = thaiHtml.indexOf('<div class="dest-body">');
console.log('\nThailand body:');
console.log(thaiHtml.slice(tBodyIdx, tBodyIdx + 600));

const vIdx = orig.indexOf('<!-- VIETNAM');
const v2 = orig.indexOf('<!-- DUBAI');
const vHtml = orig.slice(vIdx, v2);
const vBodyIdx = vHtml.indexOf('<div class="dest-body">');
console.log('\nVietnam body:');
console.log(vHtml.slice(vBodyIdx, vBodyIdx + 600));

const dIdx = orig.indexOf('<!-- DUBAI');
const d2 = orig.indexOf('<!-- ============ EXPERIENCES');
const dHtml = orig.slice(dIdx, d2);
const dBodyIdx = dHtml.indexOf('<div class="dest-body">');
console.log('\nDubai body:');
console.log(dHtml.slice(dBodyIdx, dBodyIdx + 600));
