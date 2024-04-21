export class Organization {

  private _id: string | null;
  private _name: string | null;
  private _code: string | null;


  public getId(): string | null {
    return this._id;
  }

  public setId(id: string): Organization {
    this._id = id;
    return this;
  }

  public getName(): string | null {
    return this._name;
  }

  public setName(name: string): Organization {
    this._name = name;
    return this;
  }

  public getCode(): string | null {
    return this._code;
  }

  public setCode(code: string): Organization {
    this._code = code;
    return this;
  }

}
