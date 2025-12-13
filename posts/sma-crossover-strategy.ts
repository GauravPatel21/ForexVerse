import { Post } from '../types';

export const post: Post = {
  id: 'sma-crossover-strategy',
  title: 'SMA Crossover Strategy: Momentum + Structure',
  excerpt: 'A mechanical 5-minute scalping strategy using the 10 & 20 SMA. Learn why adding Support & Resistance filters turns a noisy signal into a high-probability setup.',
  date: 'Dec 13, 2025',
  readTime: '6 min read',
  tags: ['Strategy', 'Indicators', 'Scalping'],
  imageUrl: '/images/sma-crossover.png',
  content: `
## Introduction
Moving Averages are among the oldest tools in technical analysis, but they often lag. Many traders try to trade simple "crossovers" blindly, which leads to losses during chopping markets.
The strategy detailed here adds a critical filter—**Market Structure**—to the classic crossover, specifically designed for the **5-minute timeframe**.

## The Setup
This strategy relies on capturing short-term momentum shifts aligned with structural breaks.

*   **Timeframe:** 5-Minute Chart (M5)
*   **Fast MA:** 10 Simple Moving Average (SMA) - *Yellow*
*   **Slow MA:** 20 Simple Moving Average (SMA) - *Purple*

![SMA Crossover Chart Example](/images/sma-setup.png)

## The Logic
The 10 SMA represents immediate momentum, while the 20 SMA represents the short-term trend.
*   **Bullish:** When the 10 SMA is above the 20 SMA, momentum is rising.
*   **Bearish:** When the 10 SMA is below the 20 SMA, momentum is falling.

However, a crossover alone is not enough. We need price to prove the direction by breaking a structural barrier (Support or Resistance).

## Buy Signal (Long)
1.  **The Crossover:** Wait for the **10 SMA (Yellow)** to cross **ABOVE** the **20 SMA (Purple)**.
2.  **The Structure:** Identify the immediate **Resistance Area** (the recent ceiling price hit).
3.  **The Trigger:** Enter ONLY when price explicitly **breaks and closes above** that Resistance Area.
    *   *Why?* This confirms that the momentum indicated by the SMA is real and has enough strength to clear orders sitting at resistance.

## Sell Signal (Short)
1.  **The Crossover:** Wait for the **10 SMA (Yellow)** to cross **BELOW** the **20 SMA (Purple)**.
2.  **The Structure:** Identify the immediate **Support Area** (the recent floor price hit).
3.  **The Trigger:** Enter ONLY when price explicitly **breaks and closes below** that Support Area.

## Why This Works
If you trade every SMA crossover, you will get chopped up in consolidation ranges where price moves sideways. By waiting for the **Break of Support/Resistance**, you are effectively filtering out the sideways noise. You are only entering when the market has chosen a direction *and* has the momentum (SMA) to back it up.

## Risk Management
*   **Stop Loss:** Place your stop just below the 20 SMA or the recent swing low/high.
*   **Take Profit:** Target a 1:2 Risk-to-Reward ratio or trail your stop along the 20 SMA until the trend bends.

## Summary
Indicators should never be used in isolation. By combining a lagging indicator (SMA) with a leading concept (Price Action/Structure Break), you create a robust system that verifies momentum before risking capital.

## Disclaimer
The information provided in this article is for educational purposes only and does not constitute financial advice. Trading financial markets involves a high degree of risk and may not be suitable for all investors. You should not trade with money you cannot afford to lose. Past performance of any trading system is not indicative of future results.
  `
};