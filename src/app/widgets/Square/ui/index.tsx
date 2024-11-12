import { MouseEventHandler } from "react";
import { Square as SquareType } from "../../Game/model/types";

type SquareProps = {
  value: SquareType;
  onSquareClick: MouseEventHandler<HTMLButtonElement>;
};

export const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        backgroundColor: "#fff",
        border: "1px solid #999",
        outline: 0,
        borderRadius: 0,
        fontSize: "1rem",
        fontWeight: "bold",
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};
