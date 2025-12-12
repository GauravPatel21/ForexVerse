import React, { useState } from 'react';
import { MenuIcon, XIcon, SearchIcon } from './Icons';

interface NavbarProps {
  onNavigate: (page: any, params?: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string, params?: any) => {
    setIsMobileMenuOpen(false);
    onNavigate(page, params);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-surface/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('HOME')}
          className="text-xl font-bold tracking-tight text-brand-primary-dark flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-lg">
            F
          </div>
          ForexVerse
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => onNavigate('HOME')} className="text-sm font-medium text-brand-muted hover:text-brand-primary transition-colors">Home</button>
          <button onClick={() => onNavigate('HOME', { sectionId: 'latest' })} className="text-sm font-medium text-brand-muted hover:text-brand-primary transition-colors">Analysis</button>
          <button onClick={() => onNavigate('TOOLS')} className="text-sm font-medium text-brand-muted hover:text-brand-primary transition-colors">Tools</button>
          <button onClick={() => onNavigate('ABOUT')} className="text-sm font-medium text-brand-muted hover:text-brand-primary transition-colors">About</button>
          <button 
            onClick={() => onNavigate('HOME', { sectionId: 'hero-search' })}
            className="p-2 text-brand-muted hover:text-brand-primary transition-colors"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-text p-2 hover:bg-gray-100 rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <XIcon className="w-6 h-6"/> : <MenuIcon className="w-6 h-6"/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-surface border-b border-brand-border animate-fade-in-down absolute w-full shadow-xl">
          <div className="px-6 py-4 space-y-4 flex flex-col">
             <button onClick={() => handleNavClick('HOME')} className="text-left font-medium text-brand-text py-3 border-b border-gray-50">Home</button>
             <button onClick={() => handleNavClick('HOME', { sectionId: 'latest' })} className="text-left font-medium text-brand-text py-3 border-b border-gray-50">Analysis</button>
             <button onClick={() => handleNavClick('TOOLS')} className="text-left font-medium text-brand-text py-3 border-b border-gray-50">Tools</button>
             <button onClick={() => handleNavClick('ABOUT')} className="text-left font-medium text-brand-text py-3">About Us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;