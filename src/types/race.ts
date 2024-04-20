export class Race {

    private _id: string | null;
    private _idEvent: string | null;
    private _name: string | null;
    private _round: Race.ROUND | null;

    public getId(): string | null {
        return this._id;
    }

    public setId(id: string): Race {
        this._id = id;
        return this;
    }

    public getIdEvent(): string | null {
        return this._idEvent;
    }

    public setIdEvent(idEvent: string): Race {
        this._idEvent = idEvent;
        return this;
    }

    public getName(): string | null {
        return this._name;
    }

    public setName(name: string): Race {
        this._name = name;
        return this;
    }

    public getRound(): Race.ROUND | null {
        return this._round;
    }

    public setRound(round: Race.ROUND): Race {
        this._round = round;
        return this;
    }      

}

export namespace Race {
    export enum ROUND {
      FINAL,
      SEMI_FINALS,
      QUARTER_fINALS,
      EIGHTH_FINALS	,
      ROUND_3,
      ROUND_2,
      ROUND_1,
    }
}
