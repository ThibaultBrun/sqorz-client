export class Pilot {

  private _id: string | null;
  private _idClub: string | null;
  private _gender: Pilot.Gender | null;
  private _name: string | null;
  private _firstName: string | null;
  private _number: string | null;
  private _birthdate: number | null;

  public getId(): string | null {
    return this._id;
  }

  public setId(id: string):Pilot {
    this._id = id;
    return this;
  }

  public getIdClub(): string | null {
    return this._idClub;
  }

  public setIdClub(idClub: string):Pilot {
    this._idClub = idClub;
    return this;
  }

  public getGender(): Pilot.Gender | null {
    return this._gender;
  }

  public setGender(gender: Pilot.Gender):Pilot {
    this._gender = gender;
    return this;
  }

  public getName(): string | null {
    return this._name;
  }
  public setName(name: string):Pilot {
    this._name = name;
    return this;
  }

  public getFirstName(): string | null {
    return this._firstName;
  }

  public setFirstName(firstName: string):Pilot {
    this._firstName = firstName;
    return this;
  }
  public getNumber(): string | null {
    return this._number;
  }

  public setNumber(number: string):Pilot {
    this._number = number;
    return this;
  }

  public getBirthDate(): number | null {
    return this._birthdate;
  }

  public setBirthDate(birthdate: number):Pilot {
    this._birthdate = birthdate;
    return this;
  }
}

export namespace Pilot {
  export enum Gender {
    GIRL,
    BOY,
  }
}
