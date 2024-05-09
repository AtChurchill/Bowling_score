import { Game } from './types/bowling.type';
import * as v1 from './v1/score';
import * as v2 from './v2/score';

export default {
  v1: v1.score,
  v2: v2.score,
} as Record<string, (game: any | Game) => number>;
