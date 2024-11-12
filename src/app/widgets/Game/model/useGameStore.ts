import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useGameStore = create(
  combine({ history: [Array(9).fill(null)], currentMove: 0 }, (set) => {
    return {
    // @ts-expect-error пока не разобрался как тут нормально тип указать
      setHistory: (nextHistory) => {
        set((state) => ({
          history:
            typeof nextHistory === "function"
              ? nextHistory(state.history)
              : nextHistory,
        }));
      },
      // @ts-expect-error пока не разобрался как тут нормально тип указать
      setCurrentMove: (nextCurrentMove) => {
        set((state) => ({
          currentMove:
            typeof nextCurrentMove === "function"
              ? nextCurrentMove(state.currentMove)
              : nextCurrentMove,
        }));
      },
    };
  })
);
