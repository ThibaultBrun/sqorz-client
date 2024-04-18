"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilot = void 0;
class Pilot {
    constructor(id, idClub, genre, name, firstName, number, birthdate) {
        this.id = id;
        this.idClub = idClub;
        this.genre = genre;
        this.name = name;
        this.firstName = firstName;
        this.number = number;
        this.birthdate = birthdate;
    }
    getId() {
        return this.id;
    }
    getIdClub() {
        return this.idClub;
    }
    getGenre() {
        return this.genre;
    }
    getName() {
        return this.name;
    }
    getFirstName() {
        return this.firstName;
    }
    getNumber() {
        return this.number;
    }
    getBirthDate() {
        return this.birthdate;
    }
}
exports.Pilot = Pilot;
(function (Pilot) {
    let Genre;
    (function (Genre) {
        Genre[Genre["GIRL"] = 0] = "GIRL";
        Genre[Genre["BOY"] = 1] = "BOY";
    })(Genre = Pilot.Genre || (Pilot.Genre = {}));
})(Pilot || (exports.Pilot = Pilot = {}));
