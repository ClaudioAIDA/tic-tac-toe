import { Board } from "./Board";
import { Player } from "./Player";

export class GameEngine{
    board: Board;
    currentPlayer: Player;

    constructor() {
        this.board = new Board();
        this.currentPlayer = Player.CreatePlayers("X", "O");
     }

    render(): any {
        return this.board.render();
    }

    AddTokenToPosition(x: any, y: any) {
        this.board.add(this.currentPlayer.getToken(), x, y)
        this.currentPlayer = this.currentPlayer.nextPlayer();
    }

    getGameStatus():GameStatus {
        throw new Error("Method not implemented.");
    }

}

export enum GameStatus{
    WinnerX,
    WinnerO
}
