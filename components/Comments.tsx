import React from 'react';
import Giscus from '@giscus/react';
import { ShieldCheckIcon } from './Icons';

const GISCUS_CONFIG = {
  repo: "GauravPatel21/forexverse-comments", 
  repoId: "R_kgDOQnk8yA",
  category: "General",                        
  categoryId: "DIC_kwDOQnk8yM4CztSx",
};

interface CommentsProps {
  term: string; // The Post ID or Title to map comments to
}

const Comments: React.FC<CommentsProps> = ({ term }) => {
  return (
    <div className="mt-32 max-w-6xl mx-auto px-4 md:px-0">
      {/* Section Header with Fintech Style Line */}
      <div className="flex items-center gap-6 mb-12">
        <div className="h-px bg-gray-200 flex-grow"></div>
        <div className="text-center">
            <h3 className="text-2xl font-display font-bold text-brand-text tracking-tight mb-1">
            Market Perspectives
            </h3>
            <p className="text-xs text-brand-muted uppercase tracking-wider font-semibold">
            Institutional Level Discourse
            </p>
        </div>
        <div className="h-px bg-gray-200 flex-grow"></div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Main Comments Area */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-2xl shadow-premium-sm border border-brand-border overflow-hidden min-h-[400px]">
            {/* Toolbar / Header within the card */}
            <div className="bg-gray-50/80 border-b border-gray-100 px-6 py-4 flex justify-between items-center backdrop-blur-sm">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                 <span className="text-xs font-bold text-brand-text/70 uppercase tracking-wide">Live Thread</span>
               </div>
               <span className="text-xs text-brand-muted font-medium px-2 py-1 bg-white border border-gray-200 rounded-md">
                 Secured by GitHub
               </span>
            </div>
            
            <div className="p-6 md:p-8">
                <Giscus
                  id="comments"
                  repo={GISCUS_CONFIG.repo as any}
                  repoId={GISCUS_CONFIG.repoId}
                  category={GISCUS_CONFIG.category}
                  categoryId={GISCUS_CONFIG.categoryId}
                  mapping="specific" 
                  term={term} 
                  strict="0" 
                  reactionsEnabled="1"
                  emitMetadata="0"
                  inputPosition="top"
                  theme="light"
                  lang="en"
                  loading="lazy"
                />
            </div>
          </div>
        </div>

        {/* Sidebar / Guidelines (Sticky on Desktop) */}
        <div className="lg:col-span-4 space-y-6">
           {/* Guidelines Card */}
           <div className="bg-gradient-to-br from-brand-primary/5 to-transparent rounded-2xl p-6 border border-brand-primary/10 sticky top-24">
              <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                    <ShieldCheckIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-brand-primary-dark uppercase tracking-wide">
                    Community Standard
                  </h4>
              </div>
              
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="text-brand-accent font-bold mt-1 text-xs">01</span>
                  <p className="text-sm text-brand-text/80 leading-relaxed">
                    <strong className="block text-brand-text font-semibold text-xs mb-0.5">Focus on Logic</strong>
                    Avoid emotional predictions. Back up your claims with structural levels.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                   <span className="text-brand-accent font-bold mt-1 text-xs">02</span>
                   <p className="text-sm text-brand-text/80 leading-relaxed">
                     <strong className="block text-brand-text font-semibold text-xs mb-0.5">Quality Over Quantity</strong>
                     Constructive analysis is valued over short signals or hype.
                   </p>
                </li>
                <li className="flex gap-3 items-start">
                   <span className="text-brand-accent font-bold mt-1 text-xs">03</span>
                   <p className="text-sm text-brand-text/80 leading-relaxed">
                     <strong className="block text-brand-text font-semibold text-xs mb-0.5">Respect the Process</strong>
                     Every trader is on a different journey. Debate ideas, not people.
                   </p>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-brand-primary/10">
                 <p className="text-xs text-brand-muted leading-relaxed text-center">
                    Authentication via GitHub is required to maintain high signal-to-noise ratio.
                 </p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Comments;