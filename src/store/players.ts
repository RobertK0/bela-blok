import { atom } from "jotai";

const playersKey = "players";
const savedData = localStorage.getItem(playersKey);
const data: string[] = savedData ? JSON.parse(savedData) : [];

const playersData = atom<string[]>(data);
export const playersAtom = atom(
  (get) => get(playersData),
  (_, set, update: string) => {
    set(playersData, (prev) => {
      localStorage.setItem(
        playersKey,
        JSON.stringify([...prev, update])
      );
      return [...prev, update];
    });
  }
);
