alert('asdasdd')
class Tank {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
class Weapon extends Tank{
    constructor(name, year) {
        super(name,year)
      this.name = name
    }
  }
class Airplane extends Weapon{
    constructor(name, year, speed) {
        super(name,year)
        this.description = {
        Speed: speed
      }
    }
  }

  let tank = new Tank('T-34', 1940)
  console.log(tank)
  let weapon = new Weapon('AK-47', 1947)
  console.log(weapon)
  let airplane = new Airplane('SU-37', 1996, 'Green', 2500)
  console.log(airplane)