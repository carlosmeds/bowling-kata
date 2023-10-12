export class Game {
  private score: number = 0
  private currentRoll: number = 0
  public rolls: number[] = Array(21).fill(0)

  roll(pins: number): void {
    if (pins > 10 || pins < 0) throw new Error("Invalid number of pins")

    this.rolls[this.currentRoll++] = pins
    this.score += pins
  }

  getScore(): number {
    for (let frame = 0; frame < 10; frame++) {
      const frameIndex = frame * 2
      const frameScore = this.rolls[frameIndex] + this.rolls[frameIndex + 1]

      if (frameScore === 10) {
        this.score += this.rolls[frameIndex + 2]
      }
    }

    return this.score
  }
}
