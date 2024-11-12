
import { Square } from "../../Square/ui";
import { calculateStatus } from "../model/calculateStatus";
import { calculateTurns } from "../model/calculateTurns";
import { calculateWinner } from "../model/calculateWinner";
import { Square as SquareType } from "../../Game/model/types";

type BoardProps = {
  xIsNext: boolean;
  squares: SquareType[];
  onPlay: (nextSquares: SquareType[]) => void;
};

export const Board = ({ xIsNext, squares, onPlay }: BoardProps) => {
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const player = xIsNext ? "X" : "O";
  const status = calculateStatus(winner, turns, player);

  const handleClick = (i: number) => {
    if (squares[i] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[i] = player;
    onPlay(nextSquares);
  };

  return (
    <>
      <div style={{ marginBottom: "0.5rem" }}>{status}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          width: "calc(3 * 2.5rem)",
          height: "calc(3 * 2.5rem)",
          border: "1px solid #999",
        }}
      >
        {squares.map((square, squareIndex) => (
          <Square
            key={squareIndex}
            value={square}
            onSquareClick={() => handleClick(squareIndex)}
          />
        ))}
      </div>
    </>
  );
};
