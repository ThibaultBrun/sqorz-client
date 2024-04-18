export class Organization {

    private id: string;
    private name: string;

    public constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }
}

