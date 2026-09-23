import { Icon } from './Icon.js';

export function BookingSection() {
  return `
<section id="book" aria-labelledby="book-h">
  <div class="wrap booking-grid">
    <div class="rv" id="contact">
      <p class="eyebrow">Plan Your Trip</p>
      <h2 class="h-lg" id="book-h">Tell us how you want to travel.<br/>We'll make it happen.</h2>
      <p class="lead">Send us the basics and our team replies with a custom itinerary and a transparent, itemised quote — usually the same day.</p>

      <ul class="contact-list">
        <li>
          <div class="ico">${Icon('phone', { size: 20 })}</div>
          <div><b>Call / WhatsApp</b><a href="tel:+919888181890">+91 98881 81890</a></div>
        </li>
        <li>
          <div class="ico">${Icon('mail', { size: 20 })}</div>
          <div><b>Email</b><a href="mailto:thedirectvoyage@gmail.com">thedirectvoyage@gmail.com</a></div>
        </li>
        <li>
          <div class="ico">${Icon('instagram', { size: 20 })}</div>
          <div><b>Instagram</b><a href="https://instagram.com/directvoyage" target="_blank" rel="noopener">@directvoyage</a></div>
        </li>
        <li>
          <div class="ico">${Icon('clock', { size: 20 })}</div>
          <div><b>Enquiry Hours</b><span>Mon–Sun · 9 AM – 9 PM IST</span></div>
        </li>
      </ul>

      <div class="assure">
        <span>Same-day reply</span>
        <span>No hidden costs</span>
        <span>Free revisions</span>
        <span>Own fleet on-ground</span>
      </div>
    </div>

    <div class="book-card rv">
      <h3 style="font-size:clamp(1.4rem,2vw,1.7rem)">Request a Custom Quote</h3>
      <p class="lead" style="font-size:.9rem;margin-bottom:24px">Every field helps us price it accurately the first time.</p>

      <output class="form-alert" id="bookAlert">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
        <span><b>Enquiry ready!</b>We've opened WhatsApp with your details. Didn't open? <a href="mailto:thedirectvoyage@gmail.com">Email us instead</a>.</span>
      </output>

      <form class="js-wa" data-context="Custom Quote" data-alert="bookAlert" novalidate>
        <div class="grid-2">
          <div class="field">
            <label for="b-name">Full name <span class="req" aria-hidden="true">*</span></label>
            <input id="b-name" name="name" required autocomplete="name" placeholder="Your name" aria-describedby="b-name-e" />
            <span class="err-msg" id="b-name-e">Please tell us your name.</span>
          </div>
          <div class="field">
            <label for="b-phone">Phone / WhatsApp <span class="req" aria-hidden="true">*</span></label>
            <input id="b-phone" name="phone" type="tel" inputmode="tel" required autocomplete="tel" placeholder="+91 …" aria-describedby="b-phone-e" />
            <span class="err-msg" id="b-phone-e">We need a number to reply on.</span>
          </div>
        </div>

        <div class="field">
          <label for="b-email">Email</label>
          <input id="b-email" name="email" type="email" autocomplete="email" placeholder="you@example.com" aria-describedby="b-email-e" />
          <span class="err-msg" id="b-email-e">That email doesn't look right.</span>
        </div>

        <div class="grid-2">
          <div class="field">
            <label for="b-dest">Destination <span class="req" aria-hidden="true">*</span></label>
            <select id="b-dest" name="destination" required aria-describedby="b-dest-e">
              <option value="">Choose…</option>
              <option>Singapore</option><option>Bali</option><option>Thailand</option>
              <option>Vietnam</option><option>Dubai</option><option>International Cruise</option>
              <option>Multi-country</option><option>Not sure — advise me</option>
            </select>
            <span class="err-msg" id="b-dest-e">Pick a destination.</span>
          </div>
          <div class="field">
            <label for="b-style">Travel style <span class="req" aria-hidden="true">*</span></label>
            <select id="b-style" name="style" required aria-describedby="b-style-e">
              <option value="">Choose…</option>
              <option>Smart value</option><option>Comfortable / family</option>
              <option>Premium</option><option>Luxury</option><option>Honeymoon</option>
              <option>Group / corporate</option>
            </select>
            <span class="err-msg" id="b-style-e">Pick a travel style.</span>
          </div>
        </div>

        <div class="grid-2">
          <div class="field"><label for="b-date">Travel date</label><input id="b-date" name="date" type="date" /></div>
          <div class="field"><label for="b-nights">Nights</label><input id="b-nights" name="nights" type="number" inputmode="numeric" min="1" max="60" placeholder="e.g. 6" /></div>
        </div>

        <div class="grid-2">
          <div class="field"><label for="b-adults">Adults</label><input id="b-adults" name="adults" type="number" inputmode="numeric" min="1" max="60" value="2" /></div>
          <div class="field"><label for="b-kids">Children</label><input id="b-kids" name="children" type="number" inputmode="numeric" min="0" max="20" value="0" /></div>
        </div>

        <div class="field">
          <label for="b-budget">Approximate budget (per person)</label>
          <select id="b-budget" name="budget">
            <option value="">Prefer not to say</option>
            <option>Under ₹40,000</option><option>₹40,000 – ₹75,000</option>
            <option>₹75,000 – ₹1,50,000</option><option>₹1,50,000+</option>
          </select>
        </div>

        <div class="field">
          <label for="b-msg">Anything else we should know?</label>
          <textarea id="b-msg" name="message" maxlength="600" placeholder="Hotel preferences, must-do experiences, dietary needs, anniversary…"></textarea>
          <p class="form-note" style="text-align:right;margin-top:6px"><span id="b-count">0</span>/600</p>
        </div>

        <div class="hp" aria-hidden="true"><label for="b-company">Company</label><input id="b-company" name="_company" tabindex="-1" autocomplete="off" /></div>

        <button class="btn btn-gold btn-block" type="submit">
          <span class="spin" aria-hidden="true"></span>
          ${Icon('whatsapp', { size: 18 })}
          <span>Send via WhatsApp</span>
        </button>
        <p class="form-note">Prefer email? <a href="mailto:thedirectvoyage@gmail.com">thedirectvoyage@gmail.com</a> · We reply within one working day.</p>
      </form>
    </div>
  </div>
</section>
`;
}
