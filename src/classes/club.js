"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Club = void 0;
class Club {
    constructor(id, idOrganization, name) {
        this.id = id;
        this.idOrganization = idOrganization;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getIdOrganization() {
        return this.idOrganization;
    }
}
exports.Club = Club;
