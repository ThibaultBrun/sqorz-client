export class Pilot {

    private id: string;
    private idClub: string;
    private genre: Pilot.Genre;
    private name: string;
    private firstName: string;
    private number: string;
    private birthdate: number;

    public constructor(id: string, idClub: string, genre : Pilot.Genre, name: string, firstName: string, number: string, birthdate: number) {
        this.id = id;
        this.idClub = idClub;
        this.genre = genre;
        this.name = name;
        this.firstName = firstName;
        this.number = number;
        this.birthdate = birthdate;
    }

    public getId() {
        return this.id;
    }

    public getIdClub() {
        return this.idClub;
    }

    public getGenre() {
        return this.genre;
    }

    public getName() {
        return this.name;
    }

    public getFirstName() {
        return this.firstName;
    }

    public getNumber() {
        return this.number;
    }

    public getBirthDate() {
        return this.birthdate;
    }

}

export namespace Pilot
{
    export enum Genre
    {
        GIRL,
        BOY
    }
}
