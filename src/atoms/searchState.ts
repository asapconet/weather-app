import { atom } from "recoil";
import { persistAtomEffect } from "./config";

export const recentCitiesState = atom<string[]>({
  key: "recentCitiesState",
  default: [],
  effects_UNSTABLE: [persistAtomEffect],
});

export const searchResultsState = atom<string[]>({
  key: "searchResultsState",
  default: [],
});

export const cityToSearchState = atom<string>({
  key: "cityToSearchState",
  default: "",
});
