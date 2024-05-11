import { Game } from './types/bowling.type';
import * as v1 from './v1/score';
import * as v1_correction from './v1/score.correction';
import * as v2 from './v2/score';

export default {
  v1: v1.score,
  v1_correction: v1_correction.score,
  v2: v2.score,
} as Record<string, (game: any | Game) => number>;
