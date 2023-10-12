import { InvalidPinsException } from "./exceptions/InvalidPinException"

export class Game {
  private currentRoll: number = 0
  private MAX_PINS = 10
  public rolls: number[] = Array(21).fill(0)

  roll(pins: number): void {
    if (pins < 0 || pins > this.MAX_PINS) throw new InvalidPinsException()

    this.rolls[this.currentRoll++] = pins
  }

  score(): number {
    let score = 0
    let countingRoll = 0

    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(countingRoll)) {
        score += this.getPointsWithStrikeBonus(countingRoll)
        countingRoll += 1
      } else if (this.isSpare(countingRoll)) {
        score += this.getPointsWithSpareBonus(countingRoll)
        countingRoll += 2
      } else {
        score += this.getPoints(countingRoll)
        countingRoll += 2
      }
    }

    return score
  }

  private isStrike(i: number): boolean {
    return this.rolls[i] === 10
  }

  private isSpare(i: number): boolean {
    return this.rolls[i] + this.rolls[i + 1] === 10
  }

  private getPointsWithStrikeBonus(i: number): number {
    return this.MAX_PINS + this.rolls[i + 1] + this.rolls[i + 2]
  }

  private getPointsWithSpareBonus(i: number): number {
    return this.MAX_PINS + this.rolls[i + 2] 
  }

  private getPoints(i: number): number {
    return this.rolls[i] + this.rolls[i + 1]
  }
}
