import { Square } from "../../Game/model/types";

export const calculateStatus = (winner: Square, turns: number, player: "X" | "O") => {
  if (!winner && !turns) return "Draw";

  if (winner) return `Winner ${winner}`;

  return `Next player: ${player}`;
};
