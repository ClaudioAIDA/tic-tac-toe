import { Player } from "./Player";
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

    hasPlayerWin(playerToken: Token) :boolean{
        var win = this.tokenHasHorizontals(playerToken);
        win = win || this.tokenHasVerticals(playerToken);
        win = win || this.tokenHasDiagonals(playerToken);
        return win;
    }

    private tokenHasHorizontals(playerToken: Token): boolean {
        for (var i = 0; i < this.SIZE; i++){
            var position0 = this.calculatePosition(i, 0);
            var position1 = this.calculatePosition(i, 1);
            var position2 = this.calculatePosition(i, 2);
            if (this.checkBoardLine(playerToken, position0, position1, position2))
                return true;
        }
        return false;
    }

    private tokenHasVerticals(playerToken: Token) {
        for (var i = 0; i < this.SIZE; i++) {
            var position0 = this.calculatePosition(0, i);
            var position1 = this.calculatePosition(1, i);
            var position2 = this.calculatePosition(2, i);
            if (this.checkBoardLine(playerToken, position0,position1,position2))
                return true;
        }
        return false;
    }

    private tokenHasDiagonals(playerToken: Token): boolean {
        var position0 = this.calculatePosition(0, 0);
        var position1 = this.calculatePosition(1, 1);
        var position2 = this.calculatePosition(2, 2);
        if (this.checkBoardLine(playerToken, position0, position1, position2))
            return true;
        position0 = this.calculatePosition(0, 2);
        position1 = this.calculatePosition(1, 1);
        position2 = this.calculatePosition(2, 0);
        if (this.checkBoardLine(playerToken, position0, position1, position2))
            return true;
        return false;        
    }

    private checkBoardLine(token: Token, position0: number, position1: number, position2: number) {
        return this.board[position0].equals(token)
            && this.board[position1].equals(token)
            && this.board[position2].equals(token);
    }

    getAvailableMovements() {
        return this.board.filter(token => token.isUsable()).length;
    }
}