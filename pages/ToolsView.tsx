import React, { useEffect } from 'react';
import FadeIn from '../components/FadeIn';
import { CalculatorIcon, RulerIcon, ClockIcon, ChartIcon, ArrowRightIcon } from '../components/Icons';

const ToolsView: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLaunchTool = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const tools = [
        {
            title: "Position Size Calculator",
            desc: "Calculate exactly how many lots to trade based on your account size and stop loss to manage risk effectively.",
            icon: <CalculatorIcon className="w-8 h-8 text-white"/>,
            color: "bg-blue-500",
            url: "https://www.babypips.com/tools/position-size-calculator"
        },
        {
            title: "Pip Value Calculator",
            desc: "Determine the value of a single pip in your account currency for any pair to plan targets precisely.",
            icon: <RulerIcon className="w-8 h-8 text-white"/>,
            color: "bg-indigo-500",
            url: "https://www.babypips.com/tools/pip-value-calculator"
        },
        {
            title: "Session Timings",
            desc: "Visual clock showing current open markets (London, New York, Tokyo, Sydney) and overlaps.",
            icon: <ClockIcon className="w-8 h-8 text-white"/>,
            color: "bg-teal-500",
            url: "https://market24hclock.com/"
        },
        {
            title: "Charting Platform",
            desc: "Access clean, institutional-grade charts provided by TradingView.",
            icon: <ChartIcon className="w-8 h-8 text-white"/>,
            color: "bg-slate-700",
            url: "https://www.tradingview.com/chart/"
        }
    ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
            <FadeIn>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-brand-text mb-4">Trading Tools</h1>
                    <p className="text-lg text-brand-muted max-w-2xl mx-auto">
                        Professional trading is 90% risk management. We have curated the industry's best free tools for your daily routine.
                    </p>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
                {tools.map((tool, i) => (
                    <FadeIn key={i} delay={i * 100}>
                        <div 
                            onClick={() => handleLaunchTool(tool.url)}
                            className="bg-white p-8 rounded-2xl shadow-premium-sm border border-brand-border hover:shadow-premium-md transition-all group cursor-pointer h-full relative overflow-hidden"
                        >
                            <div className={`w-16 h-16 ${tool.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                {tool.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-text mb-3">{tool.title}</h3>
                            <p className="text-brand-muted mb-6 leading-relaxed">
                                {tool.desc}
                            </p>
                            <button 
                                className="px-5 py-2.5 bg-gray-50 border border-gray-200 text-brand-text font-semibold rounded-lg group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all text-sm flex items-center gap-2"
                            >
                                Launch Tool <ArrowRightIcon className="w-4 h-4" />
                            </button>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <FadeIn delay={400}>
                <div className="mt-16 p-8 bg-brand-dark rounded-2xl text-white text-center shadow-xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-4">Need Custom Tools?</h2>
                        <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                            We are constantly building new utilities for the ForexVerse community. 
                            Check back soon for our Correlation Matrix and Economic Calendar.
                        </p>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
                </div>
            </FadeIn>
        </div>
    </div>
  );
};

export default ToolsView;