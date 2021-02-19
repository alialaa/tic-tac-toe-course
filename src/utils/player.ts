import { BoardState } from "./types";
import { isTerminal, getAvailableMoves, printFormattedBoard } from "./board";

export const getBestMove = (
    state: BoardState,
    maximizing: boolean,
    depth = 0
): number => {
        const terminalObject = isTerminal(state);
        if (terminalObject) {
            if (terminalObject.winner === "x") {
                return 100 - depth;
            } else if (terminalObject.winner === "o") {
                return -100 + depth;
            }
            return 0;
        }

        if (maximizing) {
            let best = -100;
            getAvailableMoves(state).forEach(index => {
                const child: BoardState = [...state];
                child[index] = "x";
                console.log(`Child board (x turn) (depth: ${depth})`);
                printFormattedBoard(child);
                const childValue = getBestMove(child, false, depth + 1);
                console.log("childValue", childValue);
                best = Math.max(best, childValue); 
        });
        console.log("best", best);
        return best;
    }
    if (!maximizing) {
        let best = 100;
        getAvailableMoves(state).forEach(index => {
            const child: BoardState = [...state];
            child[index] = "o";
            console.log(`Child board (o turn) (depth: ${depth})`);
            printFormattedBoard(child);
            const childValue = getBestMove(child, true, depth + 1);
            console.log("childValue", childValue);
            best = Math.min(best, childValue); 
        });
        console.log("best", best);
        return best;    
    }
};
