import { GameEngine } from "../src/GameEngine";
import { GameStatus } from "../src/GameEngine";

describe('GameEngine should', () => {
    test('render the board at any given time', () => {
        var expectedCanvas = "|   |   |   |"
        var game = new GameEngine();
        expect(game.render()).toBe(expectedCanvas);
    })

    test('add the token of the current player when a position is provided', () => {
        var expectedCanvas = "|X  |   |   |"

        var game = new GameEngine();

        game.AddTokenToPosition(0, 0)
        expect(game.render()).toBe(expectedCanvas);
    })

    test('throw error when token is put in a taken place', () => {
        var game = new GameEngine();
        game.AddTokenToPosition(0, 0);

        expect(() => { game.AddTokenToPosition(0, 0) }).toThrow("Invalid move: Place taken");
    })

    test('add the token of the next player after a movement', () => {
        var expectedCanvas = "|XO |   |   |"

        var game = new GameEngine();

        game.AddTokenToPosition(0, 0)
        game.AddTokenToPosition(0, 1)
        expect(game.render()).toBe(expectedCanvas);
    })

    test('throw error when token is put outside the board', () => {
        var game = new GameEngine();

        expect(() => { game.AddTokenToPosition(10, 0) }).toThrow("Invalid move: Out of board");
    })

    test('give X as a winner when X wins', () => {
        var game = new GameEngine();
        game.AddTokenToPosition(0, 0);
        game.AddTokenToPosition(0, 1);
        game.AddTokenToPosition(1, 0);
        game.AddTokenToPosition(0, 2);
        game.AddTokenToPosition(2, 0);

        expect(() => { game.getGameStatus() }).toBe(GameStatus.WinnerX);
    })
})