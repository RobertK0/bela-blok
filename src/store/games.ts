import { atom, useAtom } from "jotai";

export type PlayerId = number;

type Score = {
  game: number;
  calls: number;
  total: number;
  sweep?: keyof GameData["score"];
};

export interface HandData {
  dealer: PlayerId | null;
  teams: {
    teamA: PlayerId[] | null;
    teamB: PlayerId[] | null;
  };
  score: {
    teamA: Score;
    teamB: Score;
  };
}

export interface GameData extends HandData {
  history: Array<HandData>;
}

export const gameAtom = atom<GameData>({
  dealer: null,
  teams: { teamA: null, teamB: null },
  score: {
    teamA: { game: 0, calls: 0, total: 0 },
    teamB: { game: 0, calls: 0, total: 0 },
  },
  history: [],
});
