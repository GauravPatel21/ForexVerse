import React, { useEffect, useState } from 'react';
import { POSTS } from '../data';
import { ChevronLeftIcon } from '../components/Icons';
import FadeIn from '../components/FadeIn';
import ImageWithFallback from '../components/ImageWithFallback';
import Comments from '../components/Comments';

interface PostViewProps {
  id?: string;
  onNavigate: (page: any) => void;
}

const PostView: React.FC<PostViewProps> = ({ id, onNavigate }) => {
  const post = POSTS.find(p => p.id === id);

  // --- SUBSCRIPTION STATE ---
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS'>('IDLE');

  useEffect(() => {
    window.scrollTo(0, 0);

    if (post) {
      document.title = `${post.title} | ForexVerse`;
      
      // Dynamic SEO Meta Tags
      const updateMeta = (name: string, content: string) => {
        let element = document.querySelector(`meta[name="${name}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute('name', name);
          document.head.appendChild(element);
        }
        element.setAttribute('content', content);
      };

      updateMeta('description', post.excerpt);
      updateMeta('og:title', post.title);
      updateMeta('og:description', post.excerpt);
    }
  }, [id, post]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubStatus('LOADING');
    setTimeout(() => { setSubStatus('SUCCESS'); setEmail(''); }, 1500);
  };

  // Formatting content with refined prose styles
  const renderContent = (content: string) => {
    // Basic Markdown parser
    return content.split('\n').map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-4"></div>;
      
      // Headings
      if (trimmed.startsWith('## ')) return <h2 key={idx} className="text-2xl md:text-3xl font-display font-bold text-brand-text mt-12 mb-6 tracking-tight">{trimmed.replace('## ', '')}</h2>;
      if (trimmed.startsWith('### ')) return <h3 key={idx} className="text-xl font-display font-bold text-brand-text mt-8 mb-4">{trimmed.replace('### ', '')}</h3>;

      // Numbered Lists (Matches "1. ", "2. ", etc.)
      const listMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
      if (listMatch) {
        const number = listMatch[1];
        const text = listMatch[2];
        const parts = text.split(/(\*\*[^*]+\*\*)/g);
        
        return (
          <div key={idx} className="flex gap-4 mb-4 ml-1">
             <span className="text-brand-accent font-bold">{number.padStart(2, '0')}.</span>
             <p className="text-brand-text/80 leading-relaxed">
               {parts.map((part, i) => 
                 part.startsWith('**') 
                   ? <strong key={i} className="font-semibold text-brand-text">{part.slice(2, -2)}</strong> 
                   : part
               )}
             </p>
          </div>
        );
      }

      // Bullet Points
      if (trimmed.startsWith('* ')) {
        const text = trimmed.replace('* ', '');
        const parts = text.split(/(\*\*[^*]+\*\*)/g);
        return (
          <li key={idx} className="ml-6 mb-2 list-disc text-brand-text/80">
            {parts.map((part, i) => 
              part.startsWith('**') 
                ? <strong key={i} className="font-semibold text-brand-text">{part.slice(2, -2)}</strong> 
                : part
            )}
          </li>
        );
      }
      
      // Paragraphs with bold parsing
      const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={idx} className="mb-6 text-brand-text/80 text-lg leading-loose font-light">
            {parts.map((part, i) => part.startsWith('**') ? <strong key={i} className="font-semibold text-brand-text">{part.slice(2, -2)}</strong> : part)}
        </p>
      );
    });
  };

  if (!post) {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col">
            <h1 className="text-2xl font-bold text-brand-text mb-4">Post not found</h1>
            <button onClick={() => onNavigate('HOME')} className="text-brand-primary hover:underline">Go Home</button>
        </div>
    );
  }

  return (
    <div className="bg-brand-bg min-h-screen pt-24 pb-24 font-sans selection:bg-brand-accent selection:text-white">
      <article className="max-w-3xl mx-auto px-6">
        <button 
            onClick={() => onNavigate('HOME')} 
            className="group flex items-center text-sm font-semibold text-brand-muted hover:text-brand-text transition-colors mb-8"
        >
            <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mr-3 group-hover:border-brand-text transition-colors">
                <ChevronLeftIcon className="w-4 h-4" />
            </div>
            Back to Analysis
        </button>

        <FadeIn>
            {/* Header */}
            <div className="mb-10">
                <div className="flex gap-2 mb-6">
                    {post.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white border border-gray-200 text-brand-text text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                            {tag}
                        </span>
                    ))}
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-extrabold text-brand-text mb-8 leading-[1.1] tracking-tight">
                    {post.title}
                </h1>
                <div className="flex items-center gap-4 py-6 border-y border-gray-200">
                    <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white font-display font-bold">FV</div>
                    <div>
                        <div className="text-sm font-bold text-brand-text font-display">ForexVerse Team</div>
                        <div className="text-xs text-brand-muted">{post.date} · {post.readTime}</div>
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            <ImageWithFallback 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-auto rounded-2xl shadow-premium-md mb-16"
            />

            {/* Content Body */}
            <div className="prose prose-lg max-w-none text-brand-text/80">
                {renderContent(post.content)}
            </div>

            {/* Newsletter - Premium Design */}
            <div className="mt-20 p-10 bg-brand-primary rounded-3xl text-center relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-display font-bold text-white mb-2">Join the Inner Circle</h3>
                    <p className="text-blue-100/80 mb-8 max-w-md mx-auto text-sm">Get our weekly market outlook delivered to your inbox.</p>
                    {subStatus === 'SUCCESS' ? (
                        <div className="text-white font-bold animate-fade-up">Welcome aboard.</div>
                    ) : (
                        <form onSubmit={handleSubscribe} className="flex max-w-sm mx-auto bg-white/10 p-1.5 rounded-xl backdrop-blur-sm border border-white/10">
                            <input 
                                type="email" 
                                placeholder="Enter email..." 
                                className="bg-transparent flex-grow px-4 text-white placeholder-blue-200/50 outline-none text-sm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit" className="px-6 py-2 bg-white text-brand-primary font-bold rounded-lg hover:bg-brand-accent hover:text-white transition-colors text-sm">
                                Join
                            </button>
                        </form>
                    )}
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            </div>

            {/* GISCUS COMMENTS */}
            <Comments term={post.id} />
        </FadeIn>
      </article>
    </div>
  );
};

export default PostView;