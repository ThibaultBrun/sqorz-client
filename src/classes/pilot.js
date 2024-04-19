"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilot = void 0;
class Pilot {
    constructor(id, idClub, gender, name, firstName, number, birthdate) {
        this.id = id;
        this.idClub = idClub;
        this.gender = gender;
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
    getGender() {
        return this.gender;
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
    let Gender;
    (function (Gender) {
        Gender[Gender["GIRL"] = 0] = "GIRL";
        Gender[Gender["BOY"] = 1] = "BOY";
    })(Gender = Pilot.Gender || (Pilot.Gender = {}));
})(Pilot || (exports.Pilot = Pilot = {}));
