import { Game } from "./bowling"
import { InvalidPinsException } from "./exceptions/InvalidPinException"

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

    expect(() => sut.roll(11)).toThrow(InvalidPinsException)
  })
  it("Should throw an error if the number of pins is less than 0", () => {
    const { sut } = makeSut()

    expect(() => sut.roll(-1)).toThrow("Invalid number of pins")
  })
  it("Should return the score from the game", () => {
   const { sut } = makeSut()

   sut.roll(5)
   sut.roll(7)
   const score = sut.score()

    expect(score).toEqual(12)
  })
  it("Should save rolls in an array", () => {
    const { sut } = makeSut()

    sut.roll(5)
    sut.roll(7)

    expect(sut.rolls).toEqual([5, 7, ...Array(19).fill(0)])
  })
  it("Should add bonus if previous frame was a spare", () => {
    const { sut } = makeSut()

    sut.roll(5)
    sut.roll(5)
    sut.roll(7)

    expect(sut.score()).toEqual(24)
  })
  it("Should not add bonus if previous frame wasnt a spare", () => {
    const { sut } = makeSut()

    sut.roll(1)
    sut.roll(5)
    sut.roll(5)
    sut.roll(1)

    expect(sut.score()).toEqual(12)
  })
  it("Should add duplicated bonus if previous frame was a strike", () => {
    const { sut } = makeSut()

    sut.roll(10)
    sut.roll(2)
    sut.roll(3)

    expect(sut.score()).toEqual(20)
  })
})
