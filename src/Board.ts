import { Token } from "./Token";

export class Board {
    SIZE: number = 3;
    board: Token[];

    constructor() {
        this.board = [];

        for (var i = 0; i < this.SIZE * this.SIZE; i++){
            this.board.push(Token.Empty());
        }
    }

    add(token: Token, x: any, y: any) {
        const position = this.calculatePosition(x, y);
        if (!this.board[position].isUsable()) {
            throw new Error("Invalid move: Place taken");
        }
        this.board[position].merge(token);
    }

    private calculatePosition(x: number, y: number): number {
        if (x >= this.SIZE || y >= this.SIZE) throw new Error("Invalid move: Out of board")
        return (x * this.SIZE) + y;
    }

    render(): any {
        let render = "";
        for (let i = 0; i < this.board.length; i++){
            if (i % this.SIZE == 0) render += "|";
            render += this.board[i].render();
        }
        render += "|";
        return render;
    } 

    checkWinner() {
        throw new Error("Method not implemented.");
    }

    getAvailableMovements() {
        return this.board.filter(token => token.isUsable()).length;
    }
}