import { create } from 'zustand';
import { Square } from './types';

type History = Square[][];

type State = {
    history: History;
    currentMove: number;
};

type Actions = {
    setHistory: (nextHistory: State['history']) => void;
    setCurrentMove: (nextCurrentMove: State['currentMove']) => void;
};

export const useGameStore = create<State & Actions>((set) => ({
    history: [Array(9).fill(null)],
    currentMove: 0,
    setHistory: (nextHistory) => {
        set(() => ({
            history: nextHistory,
        }));
    },
    setCurrentMove: (nextCurrentMove) => {
        set(() => ({
            currentMove: nextCurrentMove,
        }));
    },
}));
