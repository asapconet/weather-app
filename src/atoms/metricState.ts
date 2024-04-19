import { atom } from "recoil";
import { persistAtomEffect } from "./config";

export const isDegree = atom({
  key: "isDegree",
  default: "C",
  effects_UNSTABLE: [persistAtomEffect],
});
