export function TrustStrip() {
  return `
<div class="strip" aria-label="Brand promises">
  <div class="marquee" aria-hidden="true">
    <span>Our Own Fleet</span><span>Direct Destination Operations</span><span>No Middlemen</span>
    <span>Transparent Pricing</span><span>Customized Itineraries</span><span>Best Price Promise</span>
    <span>24/7 On-Ground Support</span><span>Travel Your Way</span>
    <span>Our Own Fleet</span><span>Direct Destination Operations</span><span>No Middlemen</span>
    <span>Transparent Pricing</span><span>Customized Itineraries</span><span>Best Price Promise</span>
    <span>24/7 On-Ground Support</span><span>Travel Your Way</span>
  </div>
</div>
`;
}

export function AboutDMC() {
  return `
<section id="about" aria-labelledby="about-h">
  <div class="wrap">
    <div class="cards c2" style="align-items:center;gap:clamp(36px,5vw,64px)">
      <div class="rv">
        <p class="eyebrow">Who We Are</p>
        <h2 class="h-xl" id="about-h">A destination company,<br/>not a booking counter.</h2>
        <p class="lead">Direct Voyage is an international Destination Management Company. That means we don't resell somebody else's package — we run the operation on the ground ourselves, at every destination we sell.</p>
        <p class="lead">Our own vehicles meet you at arrivals. Our own coordinators handle your hotel, your tickets and your day plan. Because there are no layers between you and the destination, the price you're quoted is honest and the comfort is ours to guarantee.</p>
        <p class="lead"><strong class="gold">You tell us how you want to travel. We make it happen.</strong></p>
        <div class="hero-actions">
          <a class="btn btn-ghost" href="/why-us">Why that matters
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </div>
      <div class="rv">
        <div class="chain">
          <p class="chain-h"><span>The usual way</span><span class="chain-tag">3 margins stacked</span></p>
          <ul class="chain-flow">
            <li><b>You</b></li><li class="cut">Travel agent</li><li class="cut">Consolidator</li><li class="cut">Local DMC</li><li>Hotel &amp; driver</li>
          </ul>
          <p class="chain-note">Every hand-off adds a mark-up you never see on the invoice.</p>
        </div>
        <div class="chain chain-new">
          <p class="chain-h"><span>The Direct Voyage way</span><span class="chain-tag">0 middlemen</span></p>
          <ul class="chain-flow">
            <li><b>You</b></li><li><b>Direct Voyage</b></li><li>Hotel &amp; our own driver</li>
          </ul>
          <p class="chain-note">We <em>are</em> the DMC. One margin, disclosed up front, and the vehicle at arrivals is ours.</p>
        </div>
        <div class="minis stagger">
          <div class="card">
            <div class="ico"><svg viewBox="0 0 24 24"><path d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg></div>
            <div><h3 class="gold">Direct operations</h3><p>On-ground teams in each destination — not an email chain to an overseas supplier.</p></div>
          </div>
          <div class="card">
            <div class="ico"><svg viewBox="0 0 24 24"><path d="M3 17h2l2-6h10l2 6h2"/><path d="M5 17a2 2 0 104 0 2 2 0 10-4 0"/><path d="M15 17a2 2 0 104 0 2 2 0 10-4 0"/><path d="M7 11l1.5-4h7L17 11"/></svg></div>
            <div><h3 class="gold">Our own fleet</h3><p>Private and shared transfers in vehicles we own, maintain and dispatch ourselves.</p></div>
          </div>
          <div class="card">
            <div class="ico"><svg viewBox="0 0 24 24"><path d="M3 10.5 12 4l9 6.5"/><path d="M5 10v10h14V10"/><path d="M9.5 20v-5.5h5V20"/></svg></div>
            <div><h3 class="gold">Everything under one roof</h3><p>Stays, transfers, sightseeing, tickets, cruises and experiences — one team, one invoice.</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
}
