export class Game {
  private score: number = 0
  public rolls: number[] = Array(21).fill(0)
  public currentRoll: number = 0

  roll(pins: number): void {
    if (pins > 10 || pins < 0) throw new Error("Invalid number of pins")

    this.rolls[this.currentRoll++] = pins
    this.score += pins
  }

  getScore(): number {
    return this.rolls.reduce((acc, curr) => acc + curr, 0)
  }
}
