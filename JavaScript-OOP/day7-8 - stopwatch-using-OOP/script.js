////////////////// LAB 1

class Stopwatch {
  constructor(startTime, endTime, running, duration) {
    this._startTime = startTime;
    this._endTime = endTime;
    this._running = running;
    this._duration = duration;
  }

  set startTime(startTime) {
    this._startTime = startTime;
  }

  set endTime(endTime) {
    this._endTime = endTime;
  }

  set running(running) {
    this._running = running;
  }

  get running() {
    return this._running;
  }

  get duration() {
    return this._endTime - this._startTime;
  }

  start() {
    if (this.running) {
      console.log("Stopwatch already started.");
      return;
    }
    this.startTime = new Date().getTime();
    this.running = true;
    console.log("Stopwatch started.");
  }

  stop() {
    if (!this.running) {
      console.log("Stopwatch hasn't started yet.");
      return;
    }
    this.endTime = new Date().getTime();
    this.running = false;
    console.log(`Stopwatch stopped. Duration: ${this.duration} milliseconds.`);
  }

  reset() {
    this.startTime = 0;
    this.endTime = 0;
    this.running = false;
    console.log("Stopwatch reset.");
  }
}

const formatting = function (timeInSeconds) {
  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds % 3600) / 60);
  let seconds = timeInSeconds % 60;
  return `${hours}:${minutes}:${seconds}`;
};

const stopwatch = new Stopwatch();

const updateDisplay = function () {
  let displayElement = document.getElementById("displayTime");
  let formattedDuration = formatting(stopwatch.duration / 1000); // Convert to seconds
  displayElement.textContent = formattedDuration;
};

document.getElementById("startBtn").addEventListener("click", function () {
  stopwatch.start();
});

document.getElementById("stopBtn").addEventListener("click", function () {
  stopwatch.stop();
  updateDisplay();
});

document.getElementById("resetBtn").addEventListener("click", function () {
  stopwatch.reset();
  updateDisplay();
});

////////////////////////// LAB 2

class Vehicle {
  constructor(wheels = 4, speed = "very fast") {
    this.wheels = wheels;
    this.speed = speed;
  }
}

class Bike extends Vehicle {
  static calls = 0;

  constructor(wheels = 2, speed = "fast enough") {
    super(wheels, speed);
    Bike.calls++;
  }

  static NumberOfCalls() {
    return Bike.calls;
  }
}

let vehicle1 = new Vehicle();
console.log(vehicle1);

let bike1 = new Bike();
console.log(bike1);

let bike2 = new Bike(1, "fast");
console.log(bike2);

console.log(Bike.NumberOfCalls());

/////////////////////////////////////////////////// LAB 3

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year} and ${this.month}.`;
  }
}

const book = new Book("Java", "Yehya", 2023);
console.log(book);

const magazine = new Magazine("Kotlin", "Yehya", 2023, "Jan");
console.log(magazine.getSummary());
