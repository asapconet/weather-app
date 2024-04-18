import { atom, useSetRecoilState, AtomEffect } from "recoil";
import { recoilPersist } from "recoil-persist";

const appRenderState = atom({
  key: "AppRenderState",
  default: false,
});

export const useSsrCompletedState = () => {
  const setSsrCompleted = useSetRecoilState(appRenderState);
  return () => setSsrCompleted(true);
};

const { persistAtom } = recoilPersist();

export const persistAtomEffect = <T>(param: Parameters<AtomEffect<T>>[0]) => {
  param.getPromise(appRenderState).then(() => persistAtom(param));
};
