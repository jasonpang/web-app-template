import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  counter: number;
};

type Actions = {
  setCounter: (value: number) => void;
};

export const useAppStore = create<State & Actions>()(
  immer((set) => ({
    counter: 0,
    setCounter: (value: number) =>
      set((state) => {
        state.counter = value;
      }),
  }))
);
