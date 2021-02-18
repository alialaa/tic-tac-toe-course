import { BoardState, Moves } from "@utils";

export const printFormattedBoard = (state: BoardState): void => {
    let formattedString = "";
    state.forEach((cell, index) => {
        formattedString += cell ? ` ${cell} |` : "   |";
        if ((index + 1) % 3 === 0) {
            formattedString = formattedString.slice(0, -1);
            if (index < 8) {
                formattedString += "\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n";
            }
        }
    });
    console.log(formattedString);
};

export const isEmpty = (state: BoardState): boolean => {
    return state.every(cell => cell === null);
};

export const isFull = (state: BoardState): boolean => {
    return state.every(cell => cell);
};

export const getAvailableMoves = (state: BoardState): Moves[] => {
    const moves: Moves[] = [];
    state.forEach((cell, index) => {
        if (cell === null) {
            moves.push(index as Moves);
        }
    });
    return moves;
};
