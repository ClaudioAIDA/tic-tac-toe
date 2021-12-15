import { Board } from "./Board";
import { Player } from "./Player";

export class GameEngine{
    board: Board;
    currentPlayer: Player;

    status: GameStatus = GameStatus.Playing;

    constructor() {
        this.board = new Board();
        this.currentPlayer = Player.CreatePlayers("X", "O");
     }

    render(): any {
        return this.board.render();
    }

    AddTokenToPosition(x: any, y: any) {
        this.board.add(this.currentPlayer.getToken(), x, y);

        this.checkGameStatus();

        this.currentPlayer = this.currentPlayer.nextPlayer();
    }

    checkGameStatus() {
        if (this.board.hasPlayerWin(this.currentPlayer.getToken())) {
            this.status = this.getPlayerWinnerStatus(this.currentPlayer);
        }
        var availableMovements = this.board.getAvailableMovements();
        if (availableMovements == 0)
            this.status = GameStatus.Draw;
    }

    getPlayerWinnerStatus(player: Player): GameStatus {
        if (player.getToken().is("X"))
            return GameStatus.WinnerX;
        return GameStatus.WinnerO;
    }

    getGameStatus(): GameStatus {
        return this.status;
    }

}

export enum GameStatus{
    WinnerX,
    WinnerO,
    Playing,
    Draw
}
