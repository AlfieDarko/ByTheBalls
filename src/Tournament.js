export default class Tournament {
  constructor(
    name,
    firstMatch1,
    firstMatch2,
    firstMatch3,
    firstMatch4,
    semiFinalMatch1,
    semiFinalMatch2,
    finalMatch,
  ) {
    this.name = name;

    this.firstMatch1 = firstMatch1;
    this.firstMatch2 = firstMatch2;
    this.firstMatch3 = firstMatch3;
    this.firstMatch4 = firstMatch4;
    this.semiFinalMatch1 = semiFinalMatch1;
    this.semiFinalMatch2 = semiFinalMatch2;
    this.finalMatch = finalMatch;
  }

  getName() {
    return this.name;
  }
}
