import { Game } from '../types/bowling.type';

export type TestData = { scores: Game; expectedScore: number };
export type TestDataMap = Record<string, TestData>;
