import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import { RouteState, PageRoute } from './types';

// Lazy Load Pages for Performance (Code Splitting)
const Home = React.lazy(() => import('./pages/Home'));
const PostView = React.lazy(() => import('./pages/PostView'));
const LegalView = React.lazy(() => import('./pages/LegalView'));
const ToolsView = React.lazy(() => import('./pages/ToolsView'));
const AboutView = React.lazy(() => import('./pages/AboutView'));

const App: React.FC = () => {
  // --- ROUTER UTILITY FUNCTIONS ---

  const getRouteFromUrl = (): RouteState => {
    const path = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    const sectionId = searchParams.get('sectionId') || undefined;

    // Normalizing trailing slashes
    const cleanPath = path === '/' ? '/' : path.replace(/\/$/, '');

    if (cleanPath === '/' || cleanPath === '/index.html') {
      return { page: 'HOME', params: { sectionId } };
    }
    
    if (cleanPath === '/tools') return { page: 'TOOLS' };
    if (cleanPath === '/about') return { page: 'ABOUT' };

    // Match /post/:id
    const postMatch = cleanPath.match(/^\/post\/([^/]+)/);
    if (postMatch) {
      return { page: 'POST', params: { id: postMatch[1] } };
    }

    // Match /legal/:id
    const legalMatch = cleanPath.match(/^\/legal\/([^/]+)/);
    if (legalMatch) {
      return { page: 'LEGAL', params: { id: legalMatch[1] } };
    }

    // Default fallback
    return { page: 'HOME' };
  };

  const [route, setRoute] = useState<RouteState>(getRouteFromUrl);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setRoute(getRouteFromUrl());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageRoute, params?: any) => {
    // 1. Update Internal State
    setRoute({ page, params });
    
    // 2. Construct Professional URL
    let newPath = '/';
    const urlParams = new URLSearchParams();

    switch (page) {
      case 'HOME':
        newPath = '/';
        if (params?.sectionId) urlParams.set('sectionId', params.sectionId);
        break;
      case 'POST':
        newPath = `/post/${params?.id}`;
        break;
      case 'LEGAL':
        newPath = `/legal/${params?.id}`;
        break;
      case 'TOOLS':
        newPath = '/tools';
        break;
      case 'ABOUT':
        newPath = '/about';
        break;
    }

    // 3. Push to History
    const queryString = urlParams.toString();
    const fullUrl = queryString ? `${newPath}?${queryString}` : newPath;
    
    window.history.pushState({}, '', fullUrl);

    // 4. Scroll handling
    if (!params?.sectionId) {
      window.scrollTo(0, 0);
    }
  };

  const renderPage = () => {
    switch (route.page) {
      case 'HOME':
        return <Home onNavigate={handleNavigate} sectionId={route.params?.sectionId} />;
      case 'POST':
        return <PostView id={route.params?.id} onNavigate={handleNavigate} />;
      case 'LEGAL':
        return <LegalView id={route.params?.id} onNavigate={handleNavigate} />;
      case 'TOOLS':
        return <ToolsView />;
      case 'ABOUT':
        return <AboutView onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg font-sans text-brand-text">
      <Navbar onNavigate={handleNavigate} />
      <main className="flex-grow">
        <Suspense fallback={<Loading />}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;