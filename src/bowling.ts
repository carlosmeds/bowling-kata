export class Game {
  roll(pins: number): void {
    if (pins > 10 || pins < 0) throw new Error("Invalid number of pins")
  }
}
