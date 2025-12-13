import { Post } from '../types';

export const post: Post = {
  id: 'support-resistance',
  title: 'Support & Resistance: Liquidity Zones',
  excerpt: 'Stop drawing lines. Start identifying zones. Learn how institutions use these levels for liquidity and how to spot genuine rejections.',
  date: 'Jan 08, 2025',
  readTime: '8 min read',
  tags: ['Structure', 'Analysis'],
  imageUrl: '/images/support-resistance.png',
  content: `
## Introduction
Support and resistance are the most fundamental concepts in technical analysis, yet they are frequently misused. These are not exact numbers; they are zones where institutional order flow is likely to interact with price.

## Key Concept Overview
*   **Support:** A price area where demand (buying pressure) is strong enough to overcome supply, causing price to bounce.
*   **Resistance:** A price area where supply (selling pressure) overcomes demand, causing price to drop.
*   **The Flip:** When a resistance zone is broken, it often converts into support (and vice versa).

![Support and Resistance Zones Example](/images/support-resistance-zones.png)

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
};