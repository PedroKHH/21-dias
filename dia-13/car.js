class Car {
  NameCar;
  Power;
  MaxVelocity;
  Aceleration;

  constructor(nameCar, power, maxVelocity, aceleration) {
    this.NameCar = nameCar;
    this.Power = power;
    this.MaxVelocity = maxVelocity;
    this.Aceleration = aceleration;
  }

  timeToTravel(distance) {
    let result = parseInt(distance / (this.MaxVelocity / this.Aceleration));
    return result;
  }
}

class Race {
  NameRace;
  Type;
  DistanceRace;
  Runners = [];
  Winner;

  constructor(name, type, distance) {
    this.NameRace = name;
    this.Type = type;
    this.DistanceRace = distance;
  }

  winnerRace() {
    let winner = this.Runners[0];
    let bestTime = winner.timeToTravel(this.DistanceRace);

    for (let i = 1; i < this.Runners.length; i++) {
      let currentCar = this.Runners[i];
      let currentTime = currentCar.timeToTravel(this.DistanceRace);

      if (currentTime < bestTime) {
        winner = currentCar;
        bestTime = currentTime;
      }
    }

    this.Winner = winner;
    return winner;
  }
}

// Exemplo de uso
let car1 = new Car("Carro1", 200, 180, 10);
let car2 = new Car("Carro2", 250, 190, 9);
let car3 = new Car("Carro3", 180, 175, 11);

let race = new Race("Corrida1", "Circuito", 1000);

race.Runners[0] = car1;
race.Runners[1] = car2;
race.Runners[2] = car3;

let winner = race.winnerRace();

console.log(
  `O carro vencedor é ${winner.NameCar} com o tempo de ${winner.timeToTravel(
    race.DistanceRace
  )} segundos.`
);
