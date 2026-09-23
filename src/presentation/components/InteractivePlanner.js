import { Icon } from './Icon.js';

export function InteractivePlanner() {
  return `
    <section id="planner" aria-labelledby="planner-h">
      <div class="wrap">
        <div class="center rv sec-head">
          <p class="eyebrow">Instant Estimator</p>
          <h2 class="h-xl" id="planner-h">Design Your Journey.<br/>See Live Indicative Pricing.</h2>
          <p class="lead">Select your destination, duration, and style. We compute an instant estimate and format a customized WhatsApp brief with one click.</p>
        </div>

        <div class="planner-card rv mt-lg">
          <div class="planner-controls">
            <div class="grid-2">
              <div class="field">
                <label for="p-dest">Destination</label>
                <select id="p-dest">
                  <option value="thailand">Thailand (Phuket, Krabi, Bangkok)</option>
                  <option value="bali">Bali (Ubud, Uluwatu, Nusa Penida)</option>
                  <option value="singapore">Singapore (Marina Bay, Sentosa)</option>
                  <option value="vietnam">Vietnam (Ha Long Bay, Da Nang, Hoi An)</option>
                  <option value="dubai">Dubai (Burj Khalifa, Desert Safari)</option>
                  <option value="cruise">International Cruise</option>
                  <option value="multi-country">Multi-Country Grand Tour</option>
                </select>
              </div>

              <div class="field">
                <label for="p-style">Travel Style</label>
                <select id="p-style">
                  <option value="smart-value">Smart Value (3★ Comfort Stays)</option>
                  <option value="comfortable-family" selected>Comfortable Family (4★ Premium Stays)</option>
                  <option value="premium">Signature Boutique (Curated Stays & Private Cars)</option>
                  <option value="honeymoon">Honeymoon & Romantic (Villas & Dinners)</option>
                  <option value="luxury">The Private Collection (5★ Luxury & Yachts)</option>
                  <option value="group-corporate">Group / Corporate Delegation</option>
                </select>
              </div>
            </div>

            <div class="field">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                <label for="p-nights">Duration (Nights): <strong id="p-nights-val" class="gold">5 Nights</strong></label>
                <span class="fineprint">Recommended: 4–8 Nights</span>
              </div>
              <input type="range" id="p-nights" class="luxury-range" min="3" max="14" value="5" step="1" aria-label="Trip duration in nights" />
            </div>

            <div class="grid-2">
              <div class="field">
                <label for="p-adults">Adults (12+ yrs)</label>
                <input type="number" id="p-adults" min="1" max="40" value="2" />
              </div>
              <div class="field">
                <label for="p-children">Children (2–11 yrs)</label>
                <input type="number" id="p-children" min="0" max="20" value="0" />
              </div>
            </div>

            <div class="grid-2">
              <div class="field">
                <label for="p-name">Your Name</label>
                <input type="text" id="p-name" placeholder="Aarav Sharma" />
              </div>
              <div class="field">
                <label for="p-phone">WhatsApp Contact</label>
                <input type="tel" id="p-phone" placeholder="+91 98881 81890" />
              </div>
            </div>
          </div>

          <!-- Dynamic Live Estimate Output Box -->
          <div class="planner-calc-box">
            <div>
              <span class="tagpill">Real-Time DMC Estimate</span>
              <p class="calc-estimate-label">Indicative Land Cost Per Person</p>
              <div class="calc-estimate-amt" id="p-est-perperson">₹41,182</div>
              <p class="fineprint" id="p-est-total">Total for 2 travellers: ₹82,364</p>

              <ul class="calc-breakdown">
                <li><span>Includes Direct Fleet Transfers</span><span>✓ Included</span></li>
                <li><span>Curated Sightseeing & Sights</span><span>✓ Included</span></li>
                <li><span>Daily Breakfast & Hotel Taxes</span><span>✓ Included</span></li>
                <li><span>24/7 Destination Coordinator</span><span>✓ Dedicated</span></li>
                <li><span>Middleman Margin</span><span style="color:var(--ok)">₹0 (Zero)</span></li>
              </ul>
            </div>

            <div>
              <button class="btn btn-wa btn-block" type="button" id="p-send-wa">
                ${Icon('whatsapp', { size: 18 })}
                <span>Send Brief via WhatsApp</span>
              </button>
              <p class="form-note" style="text-align:center;margin-top:8px;">
                Opens WhatsApp with these exact parameters prefilled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
