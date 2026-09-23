export function Header() {
  return `
<header id="hdr">
  <div class="wrap">

    <div class="topline">
      <div class="tl-left">
        <a href="tel:+919888181890">+91 98881 81890</a>
        <a href="mailto:thedirectvoyage@gmail.com">thedirectvoyage@gmail.com</a>
        <span>Singapore · Bali · Vietnam · Thailand · Dubai</span>
      </div>
      <div class="tl-right"><span class="dot" aria-hidden="true"></span> Open today · 9 AM – 9 PM IST</div>
    </div>

    <div class="nav">
      <a class="brand" href="/" aria-label="Direct Voyage home">
        <svg class="brand-mark" viewBox="0 0 64 64" aria-hidden="true">
          <g class="bm-bezel">
            <circle cx="32" cy="32" r="30.2" fill="none" stroke="#C9A24B" stroke-width="1" opacity=".5"/>
            <circle cx="32" cy="32" r="24.6" fill="none" stroke="#C9A24B" stroke-width=".7" opacity=".28"/>
            <path stroke="#C9A24B" stroke-width="1.1" opacity=".55" stroke-linecap="round" fill="none"
              d="M32 6.2V2.8M44.9 9.65 46.6 6.71M54.34 19.1 57.29 17.4M57.8 32H61.2M54.34 44.9 57.29 46.6M44.9 54.34 46.6 57.29M32 57.8V61.2M19.1 54.34 17.4 57.29M9.66 44.9 6.71 46.6M6.2 32H2.8M9.66 19.1 6.71 17.4M19.1 9.66 17.4 6.71"/>
          </g>
          <g class="bm-star">
            <g fill="#C9A24B" opacity=".4">
              <path d="M42.25 21.75 32 27.6 32 32 36.4 32Z"/><path d="M42.25 42.25 36.4 32 32 32 32 36.4Z"/>
              <path d="M21.75 42.25 32 36.4 32 32 27.6 32Z"/><path d="M21.75 21.75 27.6 32 32 32 32 27.6Z"/>
            </g>
            <g fill="#F7E7BE">
              <path d="M32 9 27.62 27.62 32 32Z"/><path d="M55 32 36.38 27.62 32 32Z"/>
              <path d="M32 55 36.38 36.38 32 32Z"/><path d="M9 32 27.62 36.38 32 32Z"/>
            </g>
            <g fill="#BC8A31">
              <path d="M32 9 32 32 36.38 27.62Z"/><path d="M55 32 32 32 36.38 36.38Z"/>
              <path d="M32 55 32 32 27.62 36.38Z"/><path d="M9 32 32 32 27.62 27.62Z"/>
            </g>
          </g>
          <circle cx="32" cy="32" r="3.8" fill="#0A2540"/>
          <circle cx="32" cy="32" r="3.8" fill="none" stroke="#F7E7BE" stroke-width=".9"/>
        </svg>
        <span class="brand-text">
          <span class="brand-name">DIRECT VOYAGE</span>
          <span class="brand-rule" aria-hidden="true"></span>
          <span class="brand-tag">Travel Your Way</span>
        </span>
      </a>

      <nav class="menu" id="menu" aria-label="Primary">
        <a href="/about">About</a>
        <a href="/why-us">Why Us</a>
        <a href="/services">Services</a>
        <a href="/destinations">Destinations</a>
        <a href="/fleet">Fleet</a>
        <a href="/experiences">Experiences</a>
        <a href="/packages">Packages</a>
        <a href="/testimonials">Stories</a>
        <a href="/contact">Contact</a>
      </nav>

      <div class="nav-cta">
        <a class="btn btn-gold" href="/planner">Plan My Trip</a>
        <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="drawer"><span></span></button>
      </div>
    </div>

  </div>
</header>

<nav class="drawer" id="drawer" aria-label="Mobile" aria-hidden="true">
  <a href="/about" style="--i:1">About</a>
  <a href="/why-us" style="--i:2">Why Us</a>
  <a href="/services" style="--i:3">Services</a>
  <a href="/destinations" style="--i:4">Destinations</a>
  <a href="/fleet" style="--i:5">Fleet</a>
  <a href="/experiences" style="--i:6">Experiences</a>
  <a href="/packages" style="--i:7">Packages</a>
  <a href="/testimonials" style="--i:8">Stories</a>
  <a href="/faq" style="--i:9">FAQ</a>
  <a href="/contact" style="--i:10">Contact</a>
  <a class="btn btn-gold" href="/planner">Plan My Trip</a>
  <div class="drawer-foot">
    <a href="tel:+919888181890">+91 98881 81890</a>
    <a href="mailto:thedirectvoyage@gmail.com">thedirectvoyage@gmail.com</a>
    <span>Mon–Sun · 9 AM – 9 PM IST</span>
  </div>
</nav>
`;
}
