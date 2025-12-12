import React from 'react';

interface FooterProps {
  onNavigate: (page: any, params?: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-brand-border py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center space-y-8">
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-brand-muted/20 flex items-center justify-center text-brand-muted font-bold text-xs">
            F
          </div>
          <span className="text-brand-primary-dark font-bold text-lg">ForexVerse</span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-brand-muted">
          <button onClick={() => onNavigate('ABOUT')} className="hover:text-brand-primary transition-colors">About Us</button>
          <button onClick={() => onNavigate('LEGAL', { id: 'privacy' })} className="hover:text-brand-primary transition-colors">Privacy Policy</button>
          <button onClick={() => onNavigate('LEGAL', { id: 'terms' })} className="hover:text-brand-primary transition-colors">Terms & Conditions</button>
          <button onClick={() => onNavigate('LEGAL', { id: 'disclaimer' })} className="hover:text-brand-primary transition-colors">Disclaimer</button>
        </div>

        <div className="text-xs text-brand-muted/60 text-center max-w-lg leading-relaxed">
          &copy; {new Date().getFullYear()} ForexVerse. All rights reserved. <br/>
          Content is for educational purposes only. Trading carries risk.
        </div>
      </div>
    </footer>
  );
};

export default Footer;