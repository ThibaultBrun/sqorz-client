export class Club {
  
  private _id: string | null;
  private _idOrganization: string | null;
  private _name: string | null;

  public getId(): string | null {
    return this._id;
  }

  public setId(id: string): Club {
    this._id = id;
    return this;
  }

  public getName(): string | null {
    return this._name;
  }

  public setName(name: string): Club {
    this._name = name;
    return this;
  }
  public getIdOrganization(): string | null {
    return this._idOrganization;
  }

  public setIdOrganization(idOrganization: string): Club {
    this._idOrganization = idOrganization;
    return this;
  }

}
