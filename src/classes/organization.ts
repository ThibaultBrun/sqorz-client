export class Organization {

  private _id: string | null;
  private _name: string | null;


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

}
