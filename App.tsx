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
  // Initialize state from URL parameters for SEO/Direct Linking
  const [route, setRoute] = useState<RouteState>(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page') as PageRoute;
    const idParam = params.get('id');
    const sectionParam = params.get('sectionId');

    if (pageParam && ['HOME', 'POST', 'LEGAL', 'TOOLS', 'ABOUT'].includes(pageParam)) {
      return {
        page: pageParam,
        params: { id: idParam || undefined, sectionId: sectionParam || undefined }
      };
    }
    return { page: 'HOME' };
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page') as PageRoute;
      const idParam = params.get('id');
      const sectionParam = params.get('sectionId');
      
      if (pageParam) {
        setRoute({
          page: pageParam,
          params: { id: idParam || undefined, sectionId: sectionParam || undefined }
        });
      } else {
        setRoute({ page: 'HOME' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageRoute, params?: any) => {
    // Update State
    setRoute({ page, params });
    
    // Update URL for SEO and Shareability
    const urlParams = new URLSearchParams();
    if (page !== 'HOME') urlParams.set('page', page);
    if (params?.id) urlParams.set('id', params.id);
    if (params?.sectionId) urlParams.set('sectionId', params.sectionId);
    
    const newUrl = urlParams.toString() ? `?${urlParams.toString()}` : '/';
    window.history.pushState({}, '', newUrl);

    // Scroll to top by default on navigation, specific sections handled by components
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