export class Pilot {
  private id: string;
  private idClub: string;
  private gender: Pilot.Gender;
  private name: string;
  private firstName: string;
  private number: string;
  private birthdate: number;

  public constructor(
    id: string,
    idClub: string,
    gender: Pilot.Gender,
    name: string,
    firstName: string,
    number: string,
    birthdate: number
  ) {
    this.id = id;
    this.idClub = idClub;
    this.gender = gender;
    this.name = name;
    this.firstName = firstName;
    this.number = number;
    this.birthdate = birthdate;
  }

  public getId(): string {
    return this.id;
  }

  public getIdClub(): string {
    return this.idClub;
  }

  public getGender(): Pilot.Gender {
    return this.gender;
  }

  public getName(): string {
    return this.name;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getNumber(): string {
    return this.number;
  }

  public getBirthDate(): number {
    return this.birthdate;
  }
}

export namespace Pilot {
  export enum Gender {
    GIRL,
    BOY,
  }
}
