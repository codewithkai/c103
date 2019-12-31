const humans = [
  {
    id: "1000",
    name: "Luke Skywalker",
    appearsIn: [1, 2, 3],
    starships: ["3001", "3003"]
  },
  {
    id: "1001",
    name: "Darth Vader",
    appearsIn: [1, 2, 3],
    starships: ["3002"]
  },
  {
    id: "1002",
    name: "Han Solo",
    appearsIn: [1, 2, 3],
    starships: ["3000", "3003"]
  }
];
const humanData = {};
humans.forEach(ship => {
  humanData[ship.id] = ship;
});

const starships = [
  {
    id: "3001",
    name: "X-Wing"
  },
  {
    id: "3002",
    name: "TIE Advanced x1"
  },
  {
    id: "3003",
    name: "Imperial shuttle"
  }
];
const starshipData = {};
starships.forEach(ship => {
  starshipData[ship.id] = ship;
});

const db = {
  loadHumanByID(id) {
    return new Promise(resolve => {
      setTimeout(() => resolve(humanData[id]), 100);
    });
  },
  loadStarshipByID(id) {
    return new Promise(resolve => {
      setTimeout(() => resolve(starshipData[id]), 100);
    });
  }
};

module.exports = db;
