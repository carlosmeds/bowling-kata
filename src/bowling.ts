export class Game {
  private currentRoll: number = 0
  public rolls: number[] = Array(21).fill(0)

  roll(pins: number): void {
    if (pins > 10 || pins < 0) throw new Error("Invalid number of pins")

    this.rolls[this.currentRoll++] = pins
  }

  score(): number {
    let score = 0
    let countingRoll = 0

    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[countingRoll] === 10) {
        score +=
          10 + this.rolls[countingRoll + 1] + this.rolls[countingRoll + 2]
        countingRoll += 1
      }
      if (this.rolls[countingRoll] + this.rolls[countingRoll + 1] === 10) {
        score += 10 + this.rolls[countingRoll + 2]
        countingRoll += 2
      } else {
        score += this.rolls[countingRoll] + this.rolls[countingRoll + 1]
        countingRoll += 2
      }
    }
    console.log(this.rolls)
    return score
  }
}
