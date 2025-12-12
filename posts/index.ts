import { Post } from '../types';
import { post as priceAction101 } from './price-action-101';
import { post as supportResistance } from './support-resistance';
import { post as marketStructure } from './market-structure';
import { post as liquidityGrabs } from './liquidity-grabs';
import { post as smaStrategy } from './sma-crossover-strategy';

export const POSTS: Post[] = [
  smaStrategy, // Newest post first
  priceAction101,
  supportResistance,
  marketStructure,
  liquidityGrabs
];