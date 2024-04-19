export class Event {

    private _id: string | null;
    private _idOrganization: string | null;
    private _idClub: string | null;
    private _name: string | null;
    private _dateStart: string | null;
    private _dateEnd: string | null;

    public getId(): string | null {
        return this._id;
    }
    public setId(value: string): Event {
        this._id = value;
        return this;
    }

    public getIdOrganization(): string | null {
        return this._idOrganization;
    }

    public setIdOrganization(idOrganization: string): Event {
        this._idOrganization = idOrganization;
        return this;
    }

    public getIdClub(): string | null {
        return this._idClub;
    }

    public setIdClub(idClub: string): Event {
        this._idClub = idClub;
        return this;
    }

    public getName(): string | null {
        return this._name;
    }

    public setName(name: string): Event {
        this._name = name;
        return this;
    }

    public getDateStart(): string | null {
        return this._dateStart;
    }

    public setDateStart(dateStart: string): Event {
        this._dateStart = dateStart;
        return this;
    }

    public getDateEnd(): string | null {
        return this._dateEnd;
    }

    public setDateEnd(dateEnd: string): Event {
        this._dateEnd = dateEnd;
        return this;
    }

}