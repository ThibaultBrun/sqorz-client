"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Club = void 0;
class Club {
    getId() {
        return this._id;
    }
    setId(id) {
        this._id = id;
        return this;
    }
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
        return this;
    }
    getIdOrganization() {
        return this._idOrganization;
    }
    setIdOrganization(idOrganization) {
        this._idOrganization = idOrganization;
        return this;
    }
}
exports.Club = Club;
