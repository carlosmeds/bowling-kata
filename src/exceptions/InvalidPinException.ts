export class InvalidPinsException extends Error {
  constructor() {
    super(`Invalid number of pins`)
    this.name = "InvalidPinException"
  }
}