export class Club {

    private id: string;
    private idOrganization: string;
    private name: string;

    public constructor(id: string, idOrganization: string, name: string) {
        this.id = id;
        this.idOrganization = idOrganization;
        this.name = name;
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public getIdOrganization() {
        return this.idOrganization;
    }

}

