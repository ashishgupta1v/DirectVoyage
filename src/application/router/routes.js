/**
 * Direct Voyage — Declarative Route Definitions
 * Maps URLs to page views, titles, and lifecycle controllers.
 */

import { HomePage } from '../../presentation/pages/HomePage.js';
import { AboutPage } from '../../presentation/pages/AboutPage.js';
import { ServicesPage } from '../../presentation/pages/ServicesPage.js';
import { DestinationsPage } from '../../presentation/pages/DestinationsPage.js';
import { DestinationDetailPage } from '../../presentation/pages/DestinationDetailPage.js';
import { FleetPage } from '../../presentation/pages/FleetPage.js';
import { ExperiencesPage } from '../../presentation/pages/ExperiencesPage.js';
import { PackagesPage } from '../../presentation/pages/PackagesPage.js';
import { PlannerPage } from '../../presentation/pages/PlannerPage.js';
import { WhyUsPage } from '../../presentation/pages/WhyUsPage.js';
import { TestimonialsPage } from '../../presentation/pages/TestimonialsPage.js';
import { FaqPage } from '../../presentation/pages/FaqPage.js';
import { ContactPage } from '../../presentation/pages/ContactPage.js';
import { NotFoundPage } from '../../presentation/pages/NotFoundPage.js';

import { AppController } from '../app.controller.js';
import { PlannerController } from '../planner.controller.js';
import { ModalController } from '../modal.controller.js';
import { FaqController } from '../faq.controller.js';
import { DestinationsController } from '../destinations.controller.js';

export const routes = [
  {
    path: '/',
    view: HomePage,
    title: 'Direct Voyage — Travel Your Way | Singapore · Bali · Vietnam · Thailand · Dubai',
    controller: {
      init: () => {
        AppController.onPageMount();
      }
    }
  },
  {
    path: '/about',
    view: AboutPage,
    title: 'About Direct Voyage | Direct Destination Management Company',
    controller: {
      init: () => {
        AppController.onPageMount();
      }
    }
  },
  {
    path: '/services',
    view: ServicesPage,
    title: 'On-Ground Services & Fleet | Direct Voyage DMC',
    controller: {
      init: () => {
        AppController.onPageMount();
      }
    }
  },
  {
    path: '/destinations',
    view: DestinationsPage,
    title: 'Destinations & Handcrafted Itineraries | Direct Voyage DMC',
    controller: {
      init: () => {
        AppController.onPageMount();
        DestinationsController.init();
      }
    }
  },
  {
    path: '/destinations/:id',
    view: (params) => DestinationDetailPage(params),
    title: (params) => {
      const name = params?.id ? params.id.charAt(0).toUpperCase() + params.id.slice(1) : 'Destination';
      return `${name} Custom Itinerary & Direct DMC Rates | Direct Voyage`;
    },
    controller: {
      init: () => {
        AppController.onPageMount();
        ModalController.init();
      }
    }
  },
  {
    path: '/fleet',
    view: FleetPage,
    title: 'Executive Ground Fleet & Chauffeur Services | Direct Voyage',
    controller: {
      init: () => {
        AppController.onPageMount();
      }
    }
  },
  {
    path: '/experiences',
    view: ExperiencesPage,
    title: 'Bespoke Travel Experiences & Specialities | Direct Voyage',
    controller: {
      init: () => {
        AppController.onPageMount();
      }
    }
  },
  {
    path: '/packages',
    view: PackagesPage,
    title: 'Curated Voyage Tiers & Inclusions | Direct Voyage',
    controller: {
      init: () => {
        AppController.onPageMount();
      }
    }
  },
  {
    path: '/planner',
    view: PlannerPage,
    title: 'Live Trip Cost Estimator & Budget Calculator | Direct Voyage',
    controller: {
      init: () => {
        AppController.onPageMount();
        PlannerController.init();
      }
    }
  },
  {
    path: '/why-us',
    view: WhyUsPage,
    title: 'Why Direct DMC vs Online Travel Brokers | Direct Voyage',
    controller: {
      init: () => {
        AppController.onPageMount();
      }
    }
  },
  {
    path: '/testimonials',
    view: TestimonialsPage,
    title: 'Verified Client Stories & Traveler Reviews | Direct Voyage',
    controller: {
      init: () => {
        AppController.onPageMount();
      }
    }
  },
  {
    path: '/faq',
    view: FaqPage,
    title: 'Frequently Asked Questions & Knowledgebase | Direct Voyage',
    controller: {
      init: () => {
        AppController.onPageMount();
        FaqController.init();
      }
    }
  },
  {
    path: '/contact',
    view: ContactPage,
    title: 'Connect with Concierge & Custom Quote | Direct Voyage',
    controller: {
      init: () => {
        AppController.onPageMount();
      }
    }
  },
  {
    path: '*',
    view: NotFoundPage,
    title: '404 Route Not Found | Direct Voyage',
    controller: {
      init: () => {
        AppController.onPageMount();
      }
    }
  }
];
