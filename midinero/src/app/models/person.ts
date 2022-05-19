export class Person {
    personEmail: string;
    personName: string;
    personSurname: string;

    constructor(personEmail: string, personName: string, personSurname: string) {
        this.personEmail = personEmail;
        this.personName = personName;
        this.personSurname = personSurname;
    }
}

export class PersonDTO {
    personEmail: string;
    personName: string;
    personSurname: string;

    constructor(personEmail: string, personName: string, personSurname: string) {
        this.personEmail = personEmail;
        this.personName = personName;
        this.personSurname = personSurname;
    }
}
