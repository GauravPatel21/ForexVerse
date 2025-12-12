import React, { useEffect } from 'react';
import { LEGAL_DOCS } from '../data';
import FadeIn from '../components/FadeIn';

interface LegalViewProps {
  id?: string;
  onNavigate: (page: any, params?: any) => void;
}

const LegalView: React.FC<LegalViewProps> = ({ id, onNavigate }) => {
  const doc = LEGAL_DOCS.find(d => d.id === id) || LEGAL_DOCS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const renderContent = (content: string) => {
    return content.split('\n').map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return <br key={idx} />;
        if (trimmed.startsWith('**')) return <h3 key={idx} className="text-lg font-bold text-brand-text mt-6 mb-2">{trimmed.replace(/\*\*/g, '')}</h3>;
        return <p key={idx} className="mb-4 text-brand-text/70 text-sm leading-relaxed">{trimmed}</p>;
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-brand-bg">
        <FadeIn>
            <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-premium-sm border border-brand-border">
                <div className="flex gap-4 mb-8 border-b border-gray-100 pb-4 overflow-x-auto">
                    {LEGAL_DOCS.map(d => (
                        <button
                            key={d.id}
                            onClick={() => onNavigate('LEGAL', { id: d.id })}
                            className={`text-sm font-medium whitespace-nowrap pb-2 border-b-2 transition-colors ${
                                d.id === doc.id ? 'border-brand-primary text-brand-primary' : 'border-transparent text-brand-muted hover:text-brand-text'
                            }`}
                        >
                            {d.title}
                        </button>
                    ))}
                </div>

                <h1 className="text-2xl font-bold text-brand-text mb-8">{doc.title}</h1>
                <div>
                    {renderContent(doc.content)}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <button onClick={() => onNavigate('HOME')} className="text-sm font-semibold text-brand-primary hover:underline">
                        Return to Home
                    </button>
                </div>
            </div>
        </FadeIn>
    </div>
  );
};

export default LegalView;