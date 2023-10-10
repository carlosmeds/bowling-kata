import { Game } from "./bowling"

describe("Bowling", () => {
  it("Should roll the ball successfully", () => {
    const game = new Game()
    const rollSpy = jest.spyOn(game, "roll")

    game.roll(0)

    expect(rollSpy).toHaveBeenCalled()
  })
  it("Should throw an error if the number of pins is greater than 10", () => {
    const game = new Game()

    expect(() => game.roll(11)).toThrow("Invalid number of pins")
  })
  it("Should throw an error if the number of pins is less than 0", () => {
    const game = new Game()

    expect(() => game.roll(-1)).toThrow("Invalid number of pins")
  })
  it("Should add the number of pins to the score", () => {
    const game = new Game()

    game.roll(5)

    expect(game.score).toEqual(5)
  })
})
