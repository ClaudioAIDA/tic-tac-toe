export class Token{
      
    token: string;

    constructor(token: string) {
        this.token = token;
    }

    isUsable():boolean {
        return this.token == " ";
    }

    merge(token: Token) {
        this.token = token.token;
    }

    render() {
        return this.token;
    }

    is(tokenValue: string) {
        return tokenValue == this.token;
    }

    equals(token: Token) {
        return this.is(token.token);
    }

    static Empty(): Token {
        return new Token(" ");
    }

    static Create(token: string): Token {
        return new Token(token);
    }

}