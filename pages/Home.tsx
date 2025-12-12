import React, { useState, useEffect } from 'react';
import { POSTS } from '../data';
import FadeIn from '../components/FadeIn';
import { SearchIcon, ArrowRightIcon, ChartIcon, RulerIcon, ClockIcon } from '../components/Icons';
import ImageWithFallback from '../components/ImageWithFallback';

interface HomeProps {
  onNavigate: (page: any, params?: any) => void;
  sectionId?: string;
}

const Home: React.FC<HomeProps> = ({ onNavigate, sectionId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          if (sectionId === 'hero-search') {
            const input = element.querySelector('input');
            if (input) setTimeout(() => input.focus(), 500);
          }
        }
      }, 100);
    } else {
        window.scrollTo(0, 0);
    }
  }, [sectionId]);

  const searchResults = POSTS.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  ).slice(0, 3);

  const featuredPost = POSTS[0]; 
  const latestPosts = POSTS.slice(0, 6);
  const tags = Array.from(new Set(POSTS.flatMap(p => p.tags))).slice(0, 6);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full font-sans bg-brand-bg">
      {/* HERO SECTION - Premium Fintech Look */}
      <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
             {/* Subtle Mesh Gradient */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gray-100/50 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center">
            <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-white border border-gray-200 rounded-full shadow-premium-sm hover:shadow-premium-md transition-shadow cursor-default">
                    <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                    <span className="text-xs font-bold text-brand-text tracking-wide uppercase">Institutional Standard Education</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-display font-extrabold text-brand-text tracking-tight mb-8 leading-[1.05]">
                    Trading logic,<br/>
                    <span className="text-brand-muted">not luck.</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-brand-muted/80 mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
                    Master price action and market structure. No signals. No noise. Just the raw language of the charts.
                </p>

                {/* Refined Search Bar */}
                <div id="hero-search" className="relative max-w-lg mx-auto mb-16">
                    <div className={`relative flex items-center bg-white border rounded-2xl transition-all duration-300 shadow-premium-sm ${isFocused ? 'ring-2 ring-brand-text/5 border-brand-text' : 'border-gray-200 hover:border-gray-300'}`}>
                        <SearchIcon className="w-5 h-5 ml-5 text-brand-muted" />
                        <input 
                            type="text"
                            placeholder="Search concepts (e.g. 'structure')..."
                            className="w-full px-4 py-4 bg-transparent outline-none text-brand-text font-medium placeholder-brand-muted/50"
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    {isFocused && searchTerm.length > 1 && (
                        <div className="absolute top-full mt-3 w-full bg-white rounded-xl shadow-premium-lg border border-gray-100 z-20 overflow-hidden text-left py-2">
                            {searchResults.length > 0 ? (
                                searchResults.map(post => (
                                    <button key={post.id} onClick={() => onNavigate('POST', { id: post.id })} className="w-full px-5 py-3 hover:bg-gray-50 flex items-center justify-between group transition-colors">
                                        <span className="text-sm font-bold text-brand-text group-hover:text-brand-accent">{post.title}</span>
                                        <ArrowRightIcon className="w-4 h-4 text-gray-300 group-hover:text-brand-accent"/>
                                    </button>
                                ))
                            ) : (<div className="px-5 py-3 text-sm text-brand-muted">No results found</div>)}
                        </div>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button onClick={() => scrollToSection('start-learning')} className="px-8 py-3.5 bg-brand-text hover:bg-brand-text/90 text-white font-bold text-sm rounded-lg shadow-lg shadow-brand-text/20 transition-all transform hover:-translate-y-0.5">
                        Start Analysis
                    </button>
                    <button onClick={() => onNavigate('TOOLS')} className="px-8 py-3.5 text-brand-text font-bold text-sm hover:text-brand-accent transition-colors flex items-center gap-2">
                        Open Tools <ArrowRightIcon className="w-4 h-4"/>
                    </button>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* VALUE PROPOSITION - Grid */}
      <section id="start-learning" className="py-24 px-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:flex justify-between items-end">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-display font-bold text-brand-text mb-4 tracking-tight">The Ecosystem</h2>
                    <p className="text-brand-muted text-lg">Everything you need to build a professional trading plan, organized for clarity.</p>
                </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: 'Price Action Logic', desc: 'Understanding the why behind the move.', icon: <ChartIcon className="w-6 h-6"/>, linkId: 'price-action-101' },
                    { title: 'Market Sessions', desc: 'Optimizing for volatility and volume.', icon: <ClockIcon className="w-6 h-6"/>, linkId: 'forex-sessions' },
                    { title: 'Risk Management', desc: 'The only thing you can control.', icon: <RulerIcon className="w-6 h-6"/>, action: () => onNavigate('TOOLS') }
                ].map((card, i) => (
                    <FadeIn key={i} delay={i * 100}>
                        <div 
                            onClick={() => card.action ? card.action() : onNavigate('POST', { id: card.linkId })}
                            className="group p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-200 hover:bg-white hover:shadow-premium-md transition-all duration-300 cursor-pointer h-full"
                        >
                            <div className="mb-6 w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-brand-text group-hover:bg-brand-text group-hover:text-white transition-colors">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold text-brand-text mb-3">{card.title}</h3>
                            <p className="text-brand-muted leading-relaxed mb-6">{card.desc}</p>
                            <span className="text-sm font-bold text-brand-text group-hover:text-brand-accent flex items-center gap-2 transition-colors">
                                Explore <ArrowRightIcon className="w-4 h-4" />
                            </span>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
      </section>

      {/* FEATURED ANALYSIS */}
      <section className="py-24 px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
            <FadeIn>
                <div className="relative rounded-3xl overflow-hidden bg-brand-primary text-white shadow-premium-lg">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center relative z-10">
                            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider mb-6 w-fit">Featured Insight</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">{featuredPost.title}</h2>
                            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                {featuredPost.excerpt}
                            </p>
                            <button 
                                onClick={() => onNavigate('POST', { id: featuredPost.id })}
                                className="w-fit px-8 py-3.5 bg-white text-brand-primary font-bold rounded-xl hover:bg-blue-50 transition-colors"
                            >
                                Read Analysis
                            </button>
                        </div>
                        <div className="lg:w-1/2 min-h-[400px] relative">
                             <div className="absolute inset-0 bg-gradient-to-t from-brand-primary to-transparent lg:bg-gradient-to-l z-10"></div>
                             <ImageWithFallback
                                src={featuredPost.imageUrl} 
                                alt={featuredPost.title} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* LATEST POSTS - Clean List Layout */}
      <section id="latest" className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-baseline mb-12">
                <h2 className="text-3xl font-display font-bold text-brand-text tracking-tight">Recent Analysis</h2>
                <div className="hidden md:flex gap-2">
                    {tags.map((tag, i) => (
                        <button key={i} className="px-4 py-1.5 rounded-full border border-gray-200 text-xs font-bold text-brand-muted hover:border-brand-text hover:text-brand-text transition-all">
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
                {latestPosts.map((post, i) => (
                    <FadeIn key={post.id} delay={i * 100}>
                        <div 
                            onClick={() => onNavigate('POST', { id: post.id })}
                            className="group cursor-pointer flex flex-col h-full"
                        >
                            <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 relative shadow-premium-sm">
                                <ImageWithFallback 
                                    src={post.imageUrl} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                                />
                            </div>
                            <div className="flex flex-col flex-grow">
                                <div className="flex gap-3 mb-3 text-xs font-bold uppercase tracking-wide">
                                    <span className="text-brand-accent">{post.tags[0]}</span>
                                    <span className="text-gray-300">•</span>
                                    <span className="text-brand-muted">{post.date}</span>
                                </div>
                                <h3 className="text-xl font-display font-bold text-brand-text mb-3 leading-snug group-hover:text-brand-accent transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-brand-muted text-sm leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;