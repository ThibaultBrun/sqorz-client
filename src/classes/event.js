"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
class Event {
    getId() {
        return this._id;
    }
    setId(value) {
        this._id = value;
        return this;
    }
    getIdOrganization() {
        return this._idOrganization;
    }
    setIdOrganization(idOrganization) {
        this._idOrganization = idOrganization;
        return this;
    }
    getIdClub() {
        return this._idClub;
    }
    setIdClub(idClub) {
        this._idClub = idClub;
        return this;
    }
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
        return this;
    }
    getDateStart() {
        return this._dateStart;
    }
    setDateStart(dateStart) {
        this._dateStart = dateStart;
        return this;
    }
    getDateEnd() {
        return this._dateEnd;
    }
    setDateEnd(dateEnd) {
        this._dateEnd = dateEnd;
        return this;
    }
}
exports.Event = Event;
