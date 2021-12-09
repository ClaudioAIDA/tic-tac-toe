import { Token } from "./Token";

export class Player{

    token: Token; 
    opponent!: Player;

    private constructor(token: string) {
        this.token = Token.Create(token);
    }

    nextPlayer(): Player {
        return this.opponent;
    }

    getToken(): Token {
        return this.token;
    }

    static CreatePlayers(thisPlayerToken: string, nextPlayerToken: string): Player {
        const thisPlayer = new Player(thisPlayerToken);
        const nextPlayer = new Player(nextPlayerToken);

        thisPlayer.opponent = nextPlayer;
        nextPlayer.opponent = thisPlayer;
        return thisPlayer;
    }
}