import { Post } from '../types';

export const post: Post = {
  id: 'liquidity-grabs',
  title: 'Liquidity Mechanics: The "Stop Hunt"',
  excerpt: 'Markets move from liquidity to liquidity. Understand why your stop loss was hit right before the move occurred and how to avoid being the target.',
  date: 'Jan 15, 2025',
  readTime: '7 min read',
  tags: ['Liquidity', 'Institutional'],
  imageUrl: '/images/liquidity-grabs.png',
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

![Liquidity Grab Schematic](/images/liquidity-grab-setup.png)

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
};