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
        this.board[x + y].merge(token);
    }

    private calculatePosition(x: number, y: number): number {
        if (x >= this.SIZE || y >= this.SIZE) throw new Error("Invalid move: Out of board")
        return x + (y * this.SIZE);
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
}