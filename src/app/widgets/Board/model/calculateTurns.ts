import { Square } from "../../Game/model/types";

export const calculateTurns = (squares: Square[]) => {
  return squares.filter((square) => !square).length;
};
