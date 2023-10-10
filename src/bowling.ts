export class Game {
  public score: number = 0

  roll(pins: number): void {
    if (pins > 10 || pins < 0) throw new Error("Invalid number of pins")

    this.score += pins
  }

  getScore(): number {
    return this.score
  }
}
