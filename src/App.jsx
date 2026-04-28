import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import DocsPage from './components/DocsPage.jsx';
import FeatureRequestPage from './components/FeatureRequestPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import FeaturePage from './components/FeaturePage.jsx';
import { featurePages } from './data.js';

const routes = {
  '/': HomePage,
  '/docs': DocsPage,
  '/request-feature': FeatureRequestPage,
  '/contact': ContactPage,
};

function normalizePath(pathname) {
  if (routes[pathname]) {
    return pathname;
  }

  const featureSlug = pathname.match(/^\/features\/([^/]+)$/)?.[1];
  if (featurePages.some((feature) => feature.slug === featureSlug)) {
    return pathname;
  }

  return '/';
}

function resolvePage(pathname) {
  const featureSlug = pathname.match(/^\/features\/([^/]+)$/)?.[1];
  const feature = featurePages.find((item) => item.slug === featureSlug);

  if (feature) {
    return { Page: FeaturePage, props: { feature } };
  }

  return { Page: routes[pathname] || HomePage, props: {} };
}

export default function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  const navigate = useCallback((to) => {
    const url = new URL(to, window.location.origin);
    const nextPath = normalizePath(url.pathname);

    window.history.pushState({}, '', `${nextPath}${url.hash}`);
    setPath(nextPath);

    window.setTimeout(() => {
      if (url.hash) {
        document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 0);
  }, []);

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const { Page, props } = resolvePage(path);

  return (
    <>
      <Header navigate={navigate} />
      <main>
        <Page navigate={navigate} {...props} />
      </main>
    </>
  );
}
