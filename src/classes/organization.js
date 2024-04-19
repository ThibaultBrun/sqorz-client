"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
class Organization {
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
}
exports.Organization = Organization;
