
export function HowItWorks() {
  return `
<section id="how" aria-labelledby="how-h">
  <div class="wrap">
    <div class="center rv sec-head">
      <p class="eyebrow">How It Works</p>
      <h2 class="h-xl" id="how-h">Book in three easy steps</h2>
      <p class="lead">No forms to fight with, no call-centre queue. One conversation and we take it from there.</p>
    </div>

    <div class="steps stagger rv mt-lg">
      <div class="step">
        <div class="step-n">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 01-9 8.4 9.5 9.5 0 01-2.9-.4L4 21l1.6-4.1A8.2 8.2 0 013 11.5C3 6.8 7 3 12 3s9 3.8 9 8.5z"/><path d="M8.5 11h7M8.5 14h4"/></svg>
          <i>1</i>
        </div>
        <h3>Tell us your dream</h3>
        <p>Destination, dates, number of travellers, budget and the style of trip you want. A WhatsApp message is enough.</p>
        <span class="step-tag">Takes 2 minutes</span>
      </div>
      <div class="step">
        <div class="step-n">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h9l4 4v14a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M14 3v5h5"/><path d="M8.5 12.5h7M8.5 16h5"/></svg>
          <i>2</i>
        </div>
        <h3>We craft your plan</h3>
        <p>A custom day-by-day itinerary with an itemised, transparent price. Revise it as many times as you like before confirming.</p>
        <span class="step-tag">Draft within 24 hrs</span>
      </div>
      <div class="step">
        <div class="step-n">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 15.5 21 4l-4.5 16.5-4-6.5-6-2z"/><path d="M10.5 14 21 4"/></svg>
          <i>3</i>
        </div>
        <h3>You just travel</h3>
        <p>We handle everything on the ground — pickups, hotels, tickets, guides — with our team reachable throughout your trip.</p>
        <span class="step-tag">24/7 on-ground support</span>
      </div>
    </div>

    <div class="center rv" style="margin-top:clamp(34px,4vw,48px)">
      <a class="btn btn-gold" href="/planner">Start Step 1
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
  </div>
</section>
`;
}

export function PackagesGrid() {
  return `
<section id="packages" aria-labelledby="pkg-h">
  <div class="wrap">
    <div class="center rv sec-head">
      <p class="eyebrow">Starting Points</p>
      <h2 class="h-xl" id="pkg-h">Sample plans — then made yours</h2>
      <p class="lead">These are starting points, not fixed packages. Every element can be swapped, upgraded or removed. Indicative land-package prices per person on twin sharing, excluding flights and visa.</p>
    </div>

    <div class="price-grid stagger rv mt-lg">
      <article class="card price">
        <p class="eyebrow">Smart Value</p>
        <h3>The Essentials</h3>
        <div class="amt">₹34,900<small>per person · from</small></div>
        <ul class="tick">
          <li>4–5 nights, comfortable 3★ stays</li>
          <li>Airport transfers on our own fleet</li>
          <li>Two guided sightseeing days</li>
          <li>Daily breakfast included</li>
          <li>Shared transfers for tours</li>
          <li>On-ground support throughout</li>
        </ul>
        <a class="btn btn-ghost btn-block" href="/planner" data-plan="The Essentials">Customize This</a>
      </article>

      <article class="card price featured">
        <span class="badge">Most Popular</span>
        <p class="eyebrow">Signature</p>
        <h3>The Signature Voyage</h3>
        <div class="amt">₹68,900<small>per person · from</small></div>
        <ul class="tick">
          <li>6–7 nights, premium 4★ stays</li>
          <li>Private transfers throughout</li>
          <li>Curated attractions &amp; skip-the-line tickets</li>
          <li>One signature experience included</li>
          <li>Daily breakfast + one special dinner</li>
          <li>Dedicated trip coordinator</li>
        </ul>
        <a class="btn btn-gold btn-block" href="/planner" data-plan="The Signature Voyage">Customize This</a>
      </article>

      <article class="card price">
        <p class="eyebrow">Luxury</p>
        <h3>The Private Collection</h3>
        <div class="amt">₹1,49,000<small>per person · from</small></div>
        <ul class="tick">
          <li>7+ nights, 5★ hotels &amp; pool villas</li>
          <li>Chauffeured premium vehicle on call</li>
          <li>Private guides &amp; exclusive access</li>
          <li>Yacht, safari or private-dinner experience</li>
          <li>Full-board options &amp; lounge access</li>
          <li>24/7 concierge line</li>
        </ul>
        <a class="btn btn-ghost btn-block" href="/planner" data-plan="The Private Collection">Customize This</a>
      </article>
    </div>

    <p class="center fineprint rv" style="margin:clamp(28px,3vw,36px) auto 0">
      Prices are indicative and vary by destination, season and availability. Honeymoon, family, group and cruise plans are quoted individually — ask us for an exact, itemised figure.
    </p>
  </div>
</section>
`;
}
