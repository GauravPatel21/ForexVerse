import React, { useEffect } from 'react';
import FadeIn from '../components/FadeIn';

interface AboutViewProps {
  onNavigate: (page: any, params?: any) => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-brand-bg">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-text/5 text-xs font-bold text-brand-primary uppercase tracking-wider mb-6">
                Our Mission
            </span>
            <h1 className="text-5xl font-display font-extrabold text-brand-text mb-6 tracking-tight">
              Clarity in a World of Noise.
            </h1>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed font-light">
              We built ForexVerse to provide the education we wished we had when we started. No signals. No lifestyle marketing. Just pure price action mechanics.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
            <FadeIn delay={100}>
                <div className="bg-white p-10 rounded-2xl shadow-premium-sm border border-brand-border h-full">
                    <h2 className="text-2xl font-display font-bold text-brand-text mb-4">Who We Are</h2>
                    <p className="text-brand-text/80 leading-loose">
                        ForexVerse is a collective of analytical traders who believe that trading is a skill, not a gamble. We are a faceless brand because the focus should always be on the charts, not the personality. We do not sell dreams; we teach risk management and market structure.
                    </p>
                </div>
            </FadeIn>
            <FadeIn delay={200}>
                <div className="bg-white p-10 rounded-2xl shadow-premium-sm border border-brand-border h-full">
                    <h2 className="text-2xl font-display font-bold text-brand-text mb-4">Our Philosophy</h2>
                    <p className="text-brand-text/80 leading-loose">
                        We believe that price is the only leading indicator. Everything else is a derivative. Our methodology is rooted in institutional logic: understanding where liquidity lies, how orders are paired, and how volatility cycles function.
                    </p>
                </div>
            </FadeIn>
        </div>

        <FadeIn delay={300}>
            <div className="bg-brand-primary text-white rounded-3xl p-12 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-display font-bold mb-6">Ready to study the markets?</h2>
                    <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                        Start with the fundamentals. Master the structure. Build your edge.
                    </p>
                    <button 
                        onClick={() => onNavigate('HOME', { sectionId: 'start-learning' })}
                        className="px-8 py-4 bg-white text-brand-primary font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                    >
                        Start Analysis
                    </button>
                </div>
                {/* Abstract Background Elements */}
                <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-brand-accent/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
            </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default AboutView;