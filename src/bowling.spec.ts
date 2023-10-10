import { Game } from "./bowling"

type SutTypes = {
  sut: Game;
};

const makeSut = (): SutTypes => {
  const sut = new Game()

  return { sut }
}

describe("Bowling", () => {
  it("Should roll the ball successfully", () => {
    const { sut } = makeSut()
    const rollSpy = jest.spyOn(sut, "roll")

    sut.roll(0)

    expect(rollSpy).toHaveBeenCalled()
  })
  it("Should throw an error if the number of pins is greater than 10", () => {
    const { sut } = makeSut()

    expect(() => sut.roll(11)).toThrow("Invalid number of pins")
  })
  it("Should throw an error if the number of pins is less than 0", () => {
    const { sut } = makeSut()

    expect(() => sut.roll(-1)).toThrow("Invalid number of pins")
  })
  it("Should add the number of pins to the score", () => {
    const { sut } = makeSut()

    sut.roll(5)

    expect(sut.score).toEqual(5)
  })
  it("Should return the score from the game", () => {
   const { sut } = makeSut()

   sut.roll(5)
   sut.roll(7)
   const score = sut.getScore()

    expect(score).toEqual(12)
  })
})
