import { Token } from "./Token";

export class Board {
    board: Token[];

    constructor() {
        this.board =[Token.Empty() ,Token.Empty() ,Token.Empty() ,Token.Empty() ,Token.Empty() ,Token.Empty() ,Token.Empty() ,Token.Empty() ,Token.Empty() ,]
    }

    add(token: Token, x: any, y: any) {

        if (!this.board[x + y].isUsable()) {
            throw new Error();
        }
        this.board[x + y].merge(token);
    }

    render(): any {
        let render = "";
        for (let i = 0; i < this.board.length; i++){
            if (i % 3 == 0) render += "|";
            render += this.board[i].render();
        }
        render += "|";
        return render;
    } 
}