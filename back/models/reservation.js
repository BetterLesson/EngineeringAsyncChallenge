class Reservation {
  constructor(user, event, startTime, endTime) {
    this.user = user;
    this.event = event;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  get user() {
    return this._user;
  }

  set user(value) {
    let regexp = "^[A-Za-z][A-Za-z0-9]*$";
    if (!value.match(regexp)) {
      throw new TypeError(
        "User field should not contain spaces or special characters."
      );
    }
    this._user = value;
  }

  set event(value) {
    if (typeof value !== "string" || value.length === 0) {
      throw new TypeError(
        "Event field should be a string and must not be empty."
      );
    }
    this._event = String(value);
  }

  get event() {
    return this._event;
  }
  set startTime(value) {
    const now = new Date().getTime();
    const newStartTime = new Date(value);
    if (newStartTime.getTime() < now) {
      throw new TypeError("Start time field not valied.");
    }
    this._startTime = newStartTime;
  }

  get startTime() {
    return new Date(this._startTime);
  }

  set endTime(value) {
    const newEndTime = new Date(value);
    if (this._startTime.getTime() > newEndTime.getTime()) {
      throw new TypeError(
        "End time field should be greater than start time field "
      );
    }
    this._endTime = newEndTime;
  }

  get endTime() {
    return new Date(this._endTime);
  }

  colidesWith(event) {
    if (
      this.startTime.getTime() <= event.endTime.getTime() &&
      event.startTime.getTime() <= this.endTime.getTime()
    ) {
      return true;
    }
    return false;
  }

  passed() {
    const now = new Date().getTime();
    if (this.startTime.getTime() > now) return false;
    return true;
  }
}

module.exports = Reservation;
