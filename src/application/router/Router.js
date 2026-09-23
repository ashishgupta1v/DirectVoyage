/**
 * Direct Voyage — Ultra-Fast Client-Side SPA Router
 * HTML5 History API with parameterized routes, link interception,
 * lifecycle controllers, and instant zero-reload transitions.
 */

export class Router {
  static routes = [];
  static currentRoute = null;
  static currentParams = {};
  static outlet = null;
  static activeControllerCleanup = null;

  /**
   * Register routes table
   * @param {Array<{ path: string, view: Function, title?: string, meta?: string, controller?: Object }>} routesConfig
   */
  static init(routesConfig, outletSelector = '#router-view') {
    this.routes = routesConfig;
    this.outlet = document.querySelector(outletSelector);

    // Intercept clicks on links globally
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Ignore external, tel, mailto, and target="_blank"
      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('tel:') ||
        href.startsWith('mailto:') ||
        href.startsWith('javascript:') ||
        link.target === '_blank'
      ) {
        return;
      }

      // Handle in-page hash scrolling if on the same page, or navigate to corresponding route
      if (href.startsWith('#')) {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        } else if (href === '#top') {
          e.preventDefault();
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        } else {
          const anchorMap = {
            '#about': '/about',
            '#why': '/why-us',
            '#services': '/services',
            '#destinations': '/destinations',
            '#fleet': '/fleet',
            '#experiences': '/experiences',
            '#packages': '/packages',
            '#stories': '/testimonials',
            '#faq': '/faq',
            '#contact': '/contact',
            '#book': '/planner'
          };
          if (anchorMap[href]) {
            e.preventDefault();
            this.navigate(anchorMap[href]);
          }
        }
        return;
      }

      // SPA internal route navigation
      if (href.startsWith('/')) {
        e.preventDefault();
        this.navigate(href);
      }
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.resolve(window.location.pathname, false);
    });

    // Initial resolve
    this.resolve(window.location.pathname || '/', false);
  }

  /**
   * Navigate to a route programmatically
   * @param {string} path
   * @param {boolean} replace
   */
  static navigate(path, replace = false) {
    if (window.location.pathname === path && !path.includes('#')) return;

    if (replace) {
      window.history.replaceState(null, '', path);
    } else {
      window.history.pushState(null, '', path);
    }

    this.resolve(path, true);
  }

  /**
   * Match current URL and render the corresponding page
   * @param {string} rawPath
   * @param {boolean} shouldScroll
   */
  static resolve(rawPath, shouldScroll = true) {
    const cleanPath = rawPath.split('?')[0].split('#')[0] || '/';
    let matchedRoute = null;
    let params = {};

    for (const route of this.routes) {
      const match = this.matchPath(route.path, cleanPath);
      if (match) {
        matchedRoute = route;
        params = match;
        break;
      }
    }

    // Fallback to 404 route
    if (!matchedRoute) {
      matchedRoute = this.routes.find((r) => r.path === '*') || {
        view: () => `<div class="wrap py-10 text-center"><h1>404 — Page Not Found</h1><p><a href="/" class="btn btn-gold">Return to Home</a></p></div>`,
        title: 'Page Not Found | Direct Voyage'
      };
    }

    // Cleanup previous controller if registered
    if (typeof this.activeControllerCleanup === 'function') {
      try {
        this.activeControllerCleanup();
      } catch (err) {
        console.warn('Controller cleanup error:', err);
      }
      this.activeControllerCleanup = null;
    }

    this.currentRoute = matchedRoute;
    this.currentParams = params;

    // Update document title
    if (typeof matchedRoute.title === 'function') {
      document.title = matchedRoute.title(params);
    } else if (matchedRoute.title) {
      document.title = matchedRoute.title;
    } else {
      document.title = 'Direct Voyage — Travel Your Way';
    }

    // Render view
    if (!this.outlet) {
      this.outlet = document.querySelector('#router-view');
    }

    if (this.outlet) {
      const updateDOM = () => {
        // Gold progress bar pulse
        const bar = document.getElementById('progress');
        if (bar) {
          bar.style.transition = 'none';
          bar.style.transform = 'scaleX(0.4)';
          requestAnimationFrame(() => {
            bar.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
            bar.style.transform = 'scaleX(1)';
            setTimeout(() => {
              bar.style.transform = 'scaleX(0)';
            }, 380);
          });
        }

        // Execute page generator
        const htmlContent = matchedRoute.view(params);
        this.outlet.innerHTML = htmlContent;

        // Scroll to top
        if (shouldScroll) {
          window.scrollTo({ top: 0, left: 0 });
        }

        // Initialize page-specific controller
        if (matchedRoute.controller && typeof matchedRoute.controller.init === 'function') {
          try {
            const cleanup = matchedRoute.controller.init(params);
            if (typeof cleanup === 'function') {
              this.activeControllerCleanup = cleanup;
            }
          } catch (err) {
            console.error(`Error initializing controller for route ${matchedRoute.path}:`, err);
          }
        }
      };

      if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.startViewTransition(() => {
          updateDOM();
        });
      } else {
        this.outlet.classList.remove('spa-page-enter');
        this.outlet.classList.add('spa-page-exit');
        setTimeout(() => {
          updateDOM();
          this.outlet.classList.remove('spa-page-exit');
          void this.outlet.offsetWidth;
          this.outlet.classList.add('spa-page-enter');
        }, 80);
      }
    }

    // Update active navigation links
    this.updateActiveNavLinks(cleanPath);

    // Close mobile drawer if open
    this.closeMobileDrawer();

    // Dispatch custom navigation event
    window.dispatchEvent(
      new CustomEvent('voyage:navigated', {
        detail: { path: cleanPath, params }
      })
    );
  }

  /**
   * Pattern matcher for routes with parameters (e.g. /destinations/:id)
   * @param {string} routePattern
   * @param {string} actualPath
   */
  static matchPath(routePattern, actualPath) {
    if (routePattern === actualPath) return {};
    if (routePattern === '*') return {};

    const patternParts = routePattern.split('/').filter(Boolean);
    const actualParts = actualPath.split('/').filter(Boolean);

    if (patternParts.length !== actualParts.length) return null;

    const params = {};

    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i].startsWith(':')) {
        const paramName = patternParts[i].slice(1);
        params[paramName] = decodeURIComponent(actualParts[i]);
      } else if (patternParts[i] !== actualParts[i]) {
        return null;
      }
    }

    return params;
  }

  /**
   * Update active link states in header & mobile drawer
   * @param {string} currentPath
   */
  static updateActiveNavLinks(currentPath) {
    const navLinks = document.querySelectorAll('header .menu a, .drawer a');
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;

      if (href === currentPath) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'true');
      } else if (currentPath.startsWith('/destinations') && href === '/destinations') {
        link.classList.add('active');
        link.setAttribute('aria-current', 'true');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  /**
   * Close mobile navigation drawer if open
   */
  static closeMobileDrawer() {
    if (document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open');
      document.body.style.overflow = '';
      const drawer = document.getElementById('drawer');
      const burger = document.getElementById('burger');
      if (drawer) {
        drawer.setAttribute('aria-hidden', 'true');
      }
      if (burger) {
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Open menu');
      }
    }
  }
}
