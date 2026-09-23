/**
 * Direct Voyage — Application Bootstrap & SPA Entrypoint
 * Domain-Driven Architecture with Ultra-Fast Zero-Reload Router
 */

import './styles/main.css';
import './styles/spa.css';

import { Header } from './presentation/components/Header.js';
import { Footer, FloatingActions } from './presentation/components/Footer.js';
import { ItineraryModal } from './presentation/components/ItineraryModal.js';

import { AppController } from './application/app.controller.js';
import { Router } from './application/router/Router.js';
import { routes } from './application/router/routes.js';

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  // Render application shell
  app.innerHTML = `
    <a class="skip" href="#top">Skip to content</a>
    <div class="grain" aria-hidden="true"></div>
    <div class="progress" id="progress" aria-hidden="true"></div>

    ${Header()}

    <div id="router-view"></div>

    ${Footer()}
    ${FloatingActions()}
    ${ItineraryModal()}
  `;

  // Initialize global application shell controller (header, drawer, progress bar, etc.)
  AppController.initGlobal();

  // Initialize SPA Router with declarative route table
  Router.init(routes, '#router-view');
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
