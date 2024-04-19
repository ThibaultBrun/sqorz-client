"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilot = void 0;
class Pilot {
    getId() {
        return this._id;
    }
    setId(id) {
        this._id = id;
        return this;
    }
    getIdClub() {
        return this._idClub;
    }
    setIdClub(idClub) {
        this._idClub = idClub;
        return this;
    }
    getGender() {
        return this._gender;
    }
    setGender(gender) {
        this._gender = gender;
        return this;
    }
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
        return this;
    }
    getFirstName() {
        return this._firstName;
    }
    setFirstName(firstName) {
        this._firstName = firstName;
        return this;
    }
    getNumber() {
        return this._number;
    }
    setNumber(number) {
        this._number = number;
        return this;
    }
    getBirthDate() {
        return this._birthdate;
    }
    setBirthDate(birthdate) {
        this._birthdate = birthdate;
        return this;
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
