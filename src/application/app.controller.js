/**
 * Direct Voyage — Global Application Controller
 * Manages sticky navigation, reading progress, mobile drawer,
 * reactive scroll reveals, form validation, and interactive carousels.
 */

import { WhatsAppPayloadBuilder } from '../domain/inquiry/whatsapp-payload.builder.js';
import { InquiryValidator } from '../domain/inquiry/inquiry.validator.js';
import { Icon } from '../presentation/components/Icon.js';

export class AppController {
  static reduced = false;

  /**
   * Global setup called once when application shell mounts
   */
  static initGlobal() {
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Set copyright year
    const yrEl = document.getElementById('yr');
    if (yrEl) yrEl.textContent = new Date().getFullYear();

    /* ---------- Sticky Header, Progress Bar, Floating Actions ---------- */
    const hdr = document.getElementById('hdr');
    const bar = document.getElementById('progress');
    const totop = document.getElementById('totop');
    const mbar = document.getElementById('mbar');
    let ticking = false;

    function onScroll() {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (hdr) hdr.classList.toggle('solid', y > 40);
      if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      if (totop) totop.classList.toggle('show', y > window.innerHeight);
      if (mbar) mbar.classList.toggle('show', y > 420);
      ticking = false;
    }

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(onScroll);
        }
      },
      { passive: true }
    );
    onScroll();

    if (totop) {
      totop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: this.reduced ? 'auto' : 'smooth' });
      });
    }

    /* ---------- Mobile Drawer with Focus Trap ---------- */
    const burger = document.getElementById('burger');
    const drawer = document.getElementById('drawer');
    let lastFocus = null;

    function setDrawer(open) {
      document.body.classList.toggle('nav-open', open);
      if (burger) {
        burger.setAttribute('aria-expanded', String(open));
        burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      }
      if (drawer) {
        drawer.setAttribute('aria-hidden', String(!open));
      }
      document.body.style.overflow = open ? 'hidden' : '';
      if (open && drawer) {
        lastFocus = document.activeElement;
        window.requestAnimationFrame(() => {
          const firstLink = drawer.querySelector('a');
          if (firstLink) firstLink.focus();
        });
      } else if (lastFocus) {
        lastFocus.focus();
      }
    }

    if (burger) {
      burger.addEventListener('click', () => {
        setDrawer(!document.body.classList.contains('nav-open'));
      });
    }

    if (drawer) {
      drawer.addEventListener('click', (e) => {
        if (e.target.closest('a')) setDrawer(false);
      });
    }

    document.addEventListener('keydown', (e) => {
      if (!document.body.classList.contains('nav-open')) return;
      if (e.key === 'Escape') {
        setDrawer(false);
        return;
      }
      if (e.key !== 'Tab' || !drawer) return;
      const items = drawer.querySelectorAll('a, button');
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  /**
   * Lifecycle hook executed on every SPA page render/navigation
   */
  static onPageMount() {
    const reduced = this.reduced;

    /* ---------- Hero: Star Dust + Parallax ---------- */
    const starBox = document.getElementById('stars');
    if (starBox && !reduced && !starBox.hasChildNodes()) {
      const frag = document.createDocumentFragment();
      for (let s = 0; s < 38; s++) {
        const star = document.createElement('i');
        star.style.left = `${(Math.random() * 100).toFixed(2)}%`;
        star.style.top = `${(Math.random() * 100).toFixed(2)}%`;
        star.style.animationDelay = `${(Math.random() * 4).toFixed(2)}s`;
        star.style.opacity = (0.2 + Math.random() * 0.7).toFixed(2);
        frag.appendChild(star);
      }
      starBox.appendChild(frag);
    }

    const layers = document.querySelectorAll('.hero-scene .lyr');
    if (layers.length && !reduced) {
      window.addEventListener(
        'scroll',
        () => {
          const y = window.scrollY;
          if (y > window.innerHeight) return;
          layers.forEach((l) => {
            const depth = parseFloat(l.dataset.depth) || 8;
            l.setAttribute('transform', `translate(0 ${(y * depth) / 100})`);
          });
        },
        { passive: true }
      );
    }

    /* ---------- Scroll Reveal (.rv, .stagger) ---------- */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px' }
    );

    document.querySelectorAll('.rv, .stagger').forEach((el) => {
      // If already in viewport on mount, show immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('in');
      } else {
        io.observe(el);
      }
    });

    /* ---------- Animated Counters ---------- */
    const countIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          countIo.unobserve(en.target);
          const el = en.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          if (reduced || isNaN(target)) {
            el.textContent = target + suffix;
            return;
          }
          const start = performance.now();
          const dur = 1100;
          function step(now) {
            const p = Math.min((now - start) / dur, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('[data-count]').forEach((el) => countIo.observe(el));

    /* ---------- Card Spotlight Hover Effect ---------- */
    if (window.matchMedia('(hover: hover)').matches) {
      document.querySelectorAll('.card, .fleet-card, .glass-surface-card, .timeline-card, .detail-quote-box, .planner-card, .planner-calc-box').forEach((card) => {
        card.addEventListener('pointermove', (e) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${e.clientX - r.left}px`);
          card.style.setProperty('--my', `${e.clientY - r.top}px`);
        });
      });
    }

    /* ---------- Testimonial Rail Carousel ---------- */
    const rail = document.getElementById('rail');
    if (rail) {
      const prev = document.getElementById('railPrev');
      const next = document.getElementById('railNext');
      const dots = document.getElementById('railDots');
      const slides = rail.children;

      function slideStep() {
        if (!slides.length) return rail.clientWidth;
        const gap = parseFloat(getComputedStyle(rail).columnGap) || 24;
        return slides[0].getBoundingClientRect().width + gap;
      }
      function perView() {
        return Math.max(Math.round(rail.clientWidth / slideStep()), 1);
      }
      function pageStep() {
        return slideStep() * perView();
      }
      function pageCount() {
        return Math.ceil(slides.length / perView());
      }

      function buildDots() {
        if (!dots) return;
        dots.innerHTML = '';
        const n = pageCount();
        if (n < 2) return;
        for (let i = 0; i < n; i++) {
          const d = document.createElement('button');
          d.type = 'button';
          d.setAttribute('aria-label', `Go to testimonial page ${i + 1}`);
          d.dataset.i = String(i);
          d.addEventListener('click', function () {
            rail.scrollTo({
              left: pageStep() * parseInt(this.dataset.i, 10),
              behavior: reduced ? 'auto' : 'smooth'
            });
          });
          dots.appendChild(d);
        }
      }

      function sync() {
        if (prev) prev.disabled = rail.scrollLeft < 8;
        if (next) next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 8;
        if (dots && dots.children.length) {
          const idx = Math.min(Math.round(rail.scrollLeft / pageStep()), dots.children.length - 1);
          Array.from(dots.children).forEach((d, i) => d.classList.toggle('on', i === idx));
        }
      }

      if (prev) {
        prev.addEventListener('click', () => {
          rail.scrollBy({ left: -pageStep(), behavior: reduced ? 'auto' : 'smooth' });
        });
      }
      if (next) {
        next.addEventListener('click', () => {
          rail.scrollBy({ left: pageStep(), behavior: reduced ? 'auto' : 'smooth' });
        });
      }
      rail.addEventListener('scroll', () => window.requestAnimationFrame(sync), { passive: true });

      function refresh() {
        buildDots();
        sync();
      }
      refresh();
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
      if (window.ResizeObserver) new ResizeObserver(refresh).observe(rail);
      else window.addEventListener('resize', refresh);
    }

    /* ---------- Prefill Booking Form from Destination / Plan Buttons ---------- */
    const destSel = document.getElementById('b-dest');
    const msgBox = document.getElementById('b-msg');
    document.querySelectorAll('[data-dest],[data-plan]').forEach((el) => {
      el.addEventListener('click', () => {
        const d = el.getAttribute('data-dest');
        const p = el.getAttribute('data-plan');
        if (d && destSel) {
          Array.from(destSel.options).forEach((o) => {
            if (o.value.toLowerCase() === d.toLowerCase()) destSel.value = o.value;
          });
        }
        if (p && msgBox && !msgBox.value) {
          msgBox.value = `I’m interested in the "${p}" plan.`;
        }
      });
    });

    /* ---------- Form Validation & WhatsApp Dispatch ---------- */
    const dateInput = document.getElementById('b-date');
    if (dateInput) {
      dateInput.min = new Date().toISOString().split('T')[0];
    }

    const counter = document.getElementById('b-count');
    if (counter && msgBox) {
      msgBox.addEventListener('input', () => {
        counter.textContent = String(msgBox.value.length);
      });
    }

    function markError(field, on) {
      const wrap = field.closest('.field');
      if (wrap) wrap.classList.toggle('is-err', on);
      field.setAttribute('aria-invalid', String(on));
    }

    document.querySelectorAll('form.js-wa').forEach((form) => {
      form.addEventListener('input', (e) => {
        const f = e.target;
        if (
          f.closest('.field') &&
          f.closest('.field').classList.contains('is-err') &&
          String(f.value).trim()
        ) {
          markError(f, false);
        }
      });

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const honeypot = form.querySelector('[name="_company"]');
        if (honeypot && honeypot.value) return; // Silent discard bot

        const formData = {};
        new FormData(form).forEach((v, k) => {
          formData[k] = v;
        });

        const validation = InquiryValidator.validateForm(formData);
        if (!validation.isValid) {
          let firstBad = null;
          Object.keys(validation.errors).forEach((key) => {
            const field = form.querySelector(`[name="${key}"]`);
            if (field) {
              markError(field, true);
              if (!firstBad) firstBad = field;
            }
          });
          if (firstBad) firstBad.focus();
          return;
        }

        const btn = form.querySelector('button[type="submit"]');
        if (btn) btn.classList.add('is-busy');

        const context = form.dataset.context || 'Custom Quote';
        const url = WhatsAppPayloadBuilder.buildUrl(formData, context);

        const isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        let popupBlocked = false;

        if (isMobile) {
          // On mobile devices, direct intent opens native WhatsApp without popup blocker friction
          window.location.href = url;
        } else {
          // On desktop, open in a new tab for WhatsApp Web
          const win = window.open(url, '_blank', 'noopener');
          if (!win || win.closed || typeof win.closed === 'undefined') {
            popupBlocked = true;
          }
        }

        setTimeout(() => {
          if (btn) btn.classList.remove('is-busy');
          const alertBox = document.getElementById(form.dataset.alert);
          if (alertBox) {
            if (popupBlocked) {
              alertBox.innerHTML = `
                <span>Trip details prepared! Pop-up was blocked by your browser.</span>
                <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap">
                  <a class="btn btn-gold btn-sm" href="${url}" target="_blank" rel="noopener">
                    ${Icon('whatsapp', { size: 15 })}
                    <span>Open WhatsApp Now</span>
                  </a>
                  <button type="button" class="btn btn-outline btn-sm js-copy-inquiry">Copy Details</button>
                </div>
              `;
              const copyBtn = alertBox.querySelector('.js-copy-inquiry');
              if (copyBtn) {
                copyBtn.addEventListener('click', () => {
                  const summaryText = decodeURIComponent(url.split('text=')[1] || '');
                  navigator.clipboard.writeText(summaryText).then(() => {
                    copyBtn.textContent = 'Copied!';
                    setTimeout(() => { copyBtn.textContent = 'Copy Details'; }, 3000);
                  });
                });
              }
            }
            alertBox.classList.add('show');
            setTimeout(() => {
              alertBox.classList.remove('show');
            }, 12000);
          }
          form.reset();
          if (counter) counter.textContent = '0';
        }, 700);
      });
    });

    /* ---------- Scroll-Spy Navigation ---------- */
    const spyPairs = [];
    document.querySelectorAll('.menu a').forEach((a) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) {
        const sec = document.querySelector(href);
        if (sec) spyPairs.push({ link: a, sec: sec });
      }
    });

    function spy() {
      if (!spyPairs.length) return;
      const line = window.scrollY + window.innerHeight * 0.34;
      let active = null;
      spyPairs.forEach((p) => {
        if (p.sec.getBoundingClientRect().top + window.scrollY <= line) active = p.link;
      });
      spyPairs.forEach((p) => {
        if (p.link === active) p.link.setAttribute('aria-current', 'true');
        else p.link.removeAttribute('aria-current');
      });
    }

    window.addEventListener('scroll', spy, { passive: true });
    spy();

    /* ---------- FAQ Accordion & Live Search ---------- */
    document.querySelectorAll('.acc-q').forEach((btn) => {
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
      });
    });

    const faqSearch = document.getElementById('faqSearchInput');
    if (faqSearch) {
      faqSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        document.querySelectorAll('#faqAccordionContainer .acc').forEach((acc) => {
          const text = acc.textContent.toLowerCase();
          acc.style.display = text.includes(query) ? '' : 'none';
        });
      });
    }

    /* ---------- Hero Ticker & Quick Destination Links ---------- */
    document.querySelectorAll('.hero-ticker a, a[data-dest]').forEach((a) => {
      a.addEventListener('click', () => {
        const dest = a.getAttribute('data-dest');
        if (dest) {
          const destSel = document.getElementById('q-dest') || document.getElementById('b-dest');
          if (destSel) {
            Array.from(destSel.options).forEach((opt) => {
              if (opt.value.toLowerCase() === dest.toLowerCase()) destSel.value = opt.value;
            });
          }
        }
      });
    });

    /* ---------- Destination Detail Page: Interactive Estimator ---------- */
    const detailPage = document.querySelector('.page-dest-detail');
    if (detailPage) {
      const basePrice = parseInt(detailPage.dataset.basePrice, 10) || 0;
      const destName = detailPage.dataset.destName || '';
      const destNights = detailPage.dataset.destNights || '';
      const travellersVal = document.getElementById('sidebar-travellers-val');
      const travellersDec = document.getElementById('sidebar-travellers-dec');
      const travellersInc = document.getElementById('sidebar-travellers-inc');
      const monthSel = document.getElementById('sidebar-month');
      const totalVal = document.getElementById('sidebar-total-val');
      const waBtns = document.querySelectorAll('.js-dest-wa-btn');

      let travellers = 2;
      let month = 'Flexible Dates';

      function updateEstimator() {
        if (travellersVal) travellersVal.textContent = String(travellers);
        if (travellersDec) travellersDec.disabled = travellers <= 1;
        if (travellersInc) travellersInc.disabled = travellers >= 20;

        const total = basePrice * travellers;
        const formattedTotal = '₹' + total.toLocaleString('en-IN');
        if (totalVal) {
          totalVal.textContent = formattedTotal;
          const label = totalVal.previousElementSibling;
          if (label) label.textContent = `Estimated Total (${travellers} Traveller${travellers > 1 ? 's' : ''}):`;
        }

        const msg = encodeURIComponent(
          `Hi Direct Voyage Concierge, I am interested in planning a customized voyage to ${destName} for ${travellers} travellers (${destNights}, travel: ${month}). Estimated total: ${formattedTotal}. Please share the detailed itinerary.`
        );
        const newUrl = `https://wa.me/919888181890?text=${msg}`;

        waBtns.forEach((btn) => {
          btn.setAttribute('href', newUrl);
        });
      }

      if (travellersDec) {
        travellersDec.addEventListener('click', () => {
          if (travellers > 1) {
            travellers--;
            updateEstimator();
          }
        });
      }

      if (travellersInc) {
        travellersInc.addEventListener('click', () => {
          if (travellers < 20) {
            travellers++;
            updateEstimator();
          }
        });
      }

      if (monthSel) {
        monthSel.addEventListener('change', (e) => {
          month = e.target.value;
          updateEstimator();
        });
      }
    }
  }
}
