import { Post, LegalDoc } from './types';

// NOTE: Using updated direct Unsplash URLs to ensure images load correctly.

export const POSTS: Post[] = [
  {
    id: 'price-action-101',
    title: 'Price Action Logic: The Foundation of Analysis',
    excerpt: 'Remove the noise. Understand why stripping away indicators reveals the true sentiment of the market and how to read raw order flow.',
    date: 'Jan 05, 2025',
    readTime: '7 min read',
    tags: ['Price Action', 'Fundamentals'],
    imageUrl: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=1200&q=80', 
    content: `
## Introduction
Price action is the discipline of making trading decisions based on the raw movement of price, rather than lagging indicators. It is the language of the market, reflecting the aggregate psychology and order flow of all participants at any given moment.

## Key Concept Overview
Charts are often cluttered with moving averages, oscillators, and bands. While these tools calculate past data, they obscure the only truth in trading: the current price. By focusing on candlesticks and structure, a trader gains a direct line of sight into institutional intent.

## How It Works Mechanically
Price moves due to an imbalance between supply (sellers) and demand (buyers).
*   **Expansion:** Large, impulsive candles indicate aggressive participation from institutions.
*   **Contraction:** Small, tight candles indicate indecision or position accumulation.
*   **Rejection:** Long wicks indicate that price probed a level and was forced back, signaling a potential reversal.

## How to Apply It in Real Trading
1.  **Clean Your Charts:** Remove all indicators. Leave only the candlesticks.
2.  **Identify the Trend:** Is price making Higher Highs or Lower Lows?
3.  **Read the Reaction:** Watch how price behaves at key psychological numbers (e.g., 1.0500). Does it stall? Does it wick?
4.  **Wait for Confirmation:** Do not predict. Wait for a candle to close to confirm the sentiment.

## Mistakes Traders Make
*   **Over-analysis:** Trying to read every single tick on a 1-minute chart leads to fatigue and false signals.
*   **Ignoring Context:** A bullish candle pattern has low probability if it forms directly into a strong resistance level.
*   **Indicator Dependency:** Looking for a "crossover" instead of understanding *why* price is moving.

## Summary
Mastering price action is not about memorizing patterns; it is about understanding the logic of buyers and sellers. It provides a clearer, faster, and more professional method for analyzing risk and probability.
    `
  },
  {
    id: 'support-resistance',
    title: 'Support & Resistance: Liquidity Zones',
    excerpt: 'Stop drawing lines. Start identifying zones. Learn how institutions use these levels for liquidity and how to spot genuine rejections.',
    date: 'Jan 08, 2025',
    readTime: '8 min read',
    tags: ['Structure', 'Analysis'],
    imageUrl: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80',
    content: `
## Introduction
Support and resistance are the most fundamental concepts in technical analysis, yet they are frequently misused. These are not exact numbers; they are zones where institutional order flow is likely to interact with price.

## Key Concept Overview
*   **Support:** A price area where demand (buying pressure) is strong enough to overcome supply, causing price to bounce.
*   **Resistance:** A price area where supply (selling pressure) overcomes demand, causing price to drop.
*   **The Flip:** When a resistance zone is broken, it often converts into support (and vice versa).

## Mechanics of the Zone
Why do we use zones instead of lines?
Institutional orders are massive. They cannot be filled at a single price point like 1.2000. They are filled across a range (e.g., 1.2000 to 1.2015). Drawing a single thin line ignores this reality and leads to "fakeouts."

## How to Apply It in Real Trading
1.  **Zoom Out:** Use the Daily or 4-Hour timeframe to find major levels.
2.  **Draw the Box:** Identify the bodies and the wicks of the reaction candles. Draw a rectangle covering this area.
3.  **Wait for Interaction:** Do not place a limit order blindly. Wait for price to enter the zone and show evidence of rejection (e.g., a pin bar or engulfing candle).

## Mistakes Traders Make
*   **Drawing Too Many Levels:** If your chart looks like a grid, you will be paralyzed. Focus only on the most obvious, major swing points.
*   **Trading the Touch:** Entering immediately when price touches a line is gambling. You need confirmation that the level is holding.

## Summary
Treat support and resistance as areas of interest, not concrete barriers. They provide the "where" to trade, while price action provides the "when."
    `
  },
  {
    id: 'market-structure',
    title: 'Market Structure: Reading the Trend',
    excerpt: 'Higher Highs, Lower Lows, and Breaks of Structure. Learn to map the market to ensure you are always aligned with the dominant momentum.',
    date: 'Jan 12, 2025',
    readTime: '10 min read',
    tags: ['Market Structure', 'Trend'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    content: `
## Introduction
Market structure is the roadmap of price. It tells you the direction of the dominant trend and warns you when that trend is ending. Without understanding structure, you are navigating without a compass.

## Key Concept Overview
Markets exist in three states:
1.  **Uptrend:** Characterized by Higher Highs (HH) and Higher Lows (HL).
2.  **Downtrend:** Characterized by Lower Lows (LL) and Lower Highs (LH).
3.  **Consolidation:** Price ranges between a defined high and low.

## Mechanics of Structure
*   **BOS (Break of Structure):** When price closes beyond a previous structural high in an uptrend (or low in a downtrend), it confirms trend continuation.
*   **CHoCH (Change of Character):** The first sign of a potential reversal. In an uptrend, this happens when price breaks below the last Higher Low.

## How to Apply It in Real Trading
1.  **Identify the Current Range:** What is the most recent High and Low?
2.  **Trade With the Flow:** If the market is printing Higher Highs, look exclusively for buy setups at Higher Lows.
3.  **Spot the Break:** Wait for a BOS to confirm momentum before looking for the next entry.

## Mistakes Traders Make
*   **Counter-Trend Trading:** Trying to catch the "top" of a strong uptrend is a low-probability strategy. Trend continuation is statistically more likely than reversal.
*   **Confusing Timeframes:** An uptrend on the 5-minute chart might just be a pullback on the 4-Hour downtrend. Always respect the higher timeframe structure.

## Summary
Structure is the context for every trade. Before executing, ask yourself: "What is the structure doing?" If you cannot answer, you should not be in the market.
    `
  },
  {
    id: 'liquidity-grabs',
    title: 'Liquidity Mechanics: The "Stop Hunt"',
    excerpt: 'Markets move from liquidity to liquidity. Understand why your stop loss was hit right before the move occurred and how to avoid being the target.',
    date: 'Jan 15, 2025',
    readTime: '7 min read',
    tags: ['Liquidity', 'Institutional'],
    imageUrl: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=1200&q=80',
    content: `
## Introduction
Have you ever had a trade hit your stop loss, only to immediately reverse and go to your target? This is not bad luck, and the broker is not hunting you personally. This is a function of market liquidity.

## Key Concept Overview
Institutions need liquidity to enter large positions. Liquidity is simply a collection of orders.
*   **Buy Liquidity:** Found above old highs (Stop Losses of sellers, Breakout Buy Stops).
*   **Sell Liquidity:** Found below old lows (Stop Losses of buyers, Breakout Sell Stops).

## Mechanics of a Grab
To buy a massive amount of currency, a bank needs a massive amount of sellers. Where are the sellers? They are the traders whose stop losses are sitting just below a support level.
The market dips below support, triggers those sell orders (providing the bank with the liquidity they need to buy), and then reverses upward.

## How to Apply It in Real Trading
1.  **Identify Obvious Stops:** Look at equal highs or equal lows. Ask yourself, "Where is everyone else hiding their stop loss?"
2.  **Wait for the Sweep:** Do not enter at the obvious support level. Wait for price to pierce it and reclaim the level.
3.  **Enter After the Grab:** Once the liquidity has been taken and price moves back into the range, the probability of the move increases.

## Mistakes Traders Make
*   **Placing Tight Stops:** Placing a stop loss exactly at a structural low makes you an easy target.
*   **FOMO on Breakouts:** Buying immediately when resistance breaks often leads to being trapped in a "fakeout" or liquidity grab.

## Summary
Liquidity drives the market. By thinking like an institution rather than a retail trader, you can stop being the liquidity and start using it for confirmation.
    `
  },
  {
    id: 'forex-sessions',
    title: 'Session Timing: Volatility Cycles',
    excerpt: 'Time is an edge. Discover why the London and New York overlaps provide the volume needed for clean price action and when to stay out of the market.',
    date: 'Jan 18, 2025',
    readTime: '5 min read',
    tags: ['Sessions', 'Timing'],
    imageUrl: 'https://images.unsplash.com/photo-1495364141860-b0d03ecc005c?auto=format&fit=crop&w=1200&q=80',
    content: `
## Introduction
The Forex market operates 24 hours a day, but volatility is not distributed equally. Trading during low-volume hours results in erratic price action, wide spreads, and low probability setups. Professional traders operate when the money is moving.

## Key Concept Overview
*   **Asian Session:** Generally lower volatility. often creates a consolidation range that is broken later.
*   **London Session:** The highest volume session. Often sets the "High" or "Low" of the day.
*   **New York Session:** High volatility, specifically at the open.

## Mechanics of the Overlap
The "Golden Hours" occur when the London session and New York session overlap (typically 8:00 AM EST to 12:00 PM EST).
During this window, the world's two largest financial centers are transacting simultaneously. This creates deep liquidity and directional momentum.

## How to Apply It in Real Trading
1.  **Define Your Window:** Commit to trading only during specific high-volume hours (e.g., London Open or NY Open).
2.  **Avoid the Dead Zones:** The late US afternoon (5:00 PM EST) creates wide spreads and choppy movement. Avoid holding intraday positions through this time.
3.  **Watch the Opens:** Significant reversals or breakouts often occur within the first 60 minutes of a major session open.

## Mistakes Traders Make
*   **Over-trading:** Trading 12 hours a day leads to decision fatigue.
*   **Trading Holidays:** Bank holidays in the US or UK drain liquidity from the market. Price action becomes unreliable.

## Summary
Treat trading like a business with operating hours. You do not need to be in the market all day; you only need to be there when the opportunity is highest.
    `
  }
];

export const LEGAL_DOCS: LegalDoc[] = [
  {
    id: 'disclaimer',
    title: 'Risk Disclaimer',
    content: `
**Educational Purpose Only**
The content provided on ForexVerse, including all articles, tools, and analysis, is strictly for educational and informational purposes only. It does not constitute financial advice, investment advice, trading advice, or any other type of recommendation. 

**No Financial Advice**
ForexVerse is not a registered investment advisor or broker-dealer. No content on this site should be interpreted as a solicitation or inducement to buy or sell any financial instrument. You are responsible for your own independent verification of facts and for your own investment decisions.

**Risk Warning**
Trading Foreign Exchange (Forex) and Contracts for Difference (CFDs) carries a high level of risk and may not be suitable for all investors. The high degree of leverage available can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. There is a possibility that you could sustain a loss of some or all of your initial investment. You should not invest money that you cannot afford to lose.

**Past Performance**
Past performance of any trading system, strategy, or methodology is not necessarily indicative of future results. No representation is being made that any account will or is likely to achieve profits or losses similar to those discussed.
    `
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    content: `
**Data Collection**
ForexVerse respects your privacy. As a static educational platform, we collect minimal user data. We do not require account creation for accessing educational content.

**Cookies and Analytics**
We may use standard cookies and third-party analytics tools (such as Google Analytics) to understand website traffic patterns and improve user experience. This data is aggregated and anonymized. You may disable cookies through your browser settings at any time.

**Third-Party Services**
This website may utilize third-party services for functionality such as commenting (Giscus/GitHub) or hosting. These services act as independent data controllers. We encourage you to review their respective privacy policies.

**Data Security**
We implement reasonable security measures to maintain the safety of your personal information. However, no method of transmission over the internet is 100% secure.

**User Rights**
You retain the right to request information regarding any data we may hold about you, or to request its deletion, subject to applicable laws.
    `
  },
  {
    id: 'terms',
    title: 'Terms & Conditions',
    content: `
**Acceptance of Terms**
By accessing the ForexVerse website, you agree to be bound by these Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.

**Intellectual Property**
All content, materials, graphics, and text on ForexVerse are the intellectual property of ForexVerse. You are granted a limited license to view the material for personal, non-commercial educational use only. You may not modify, copy, reproduce, or redistribute the materials for commercial purposes without explicit written consent.

**Accuracy of Materials**
The materials on ForexVerse are provided on an 'as is' basis. While we strive for accuracy, we make no warranties, expressed or implied, regarding the accuracy, likely results, or reliability of the use of the materials on its website.

**Limitation of Liability**
In no event shall ForexVerse be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ForexVerse's website.

**Governing Law**
These terms and conditions are governed by and construed in accordance with the laws of the operating jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
    `
  }
];