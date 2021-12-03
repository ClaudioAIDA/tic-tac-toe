import { GameEngine } from "../src/GameEngine";

describe('GameEngine should', () => {
    test('render the board at any given time', () => {
        var expectedCanvas = "|   |   |   |"
        var game = new GameEngine();
        expect(game.render()).toBe(expectedCanvas);
    })
})