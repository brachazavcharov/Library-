export class BorrowerLIst {
    constructor(id: number, tz: number, ageCategory: number, firstName: string,
        lastName: string, phoneNumber: number, mail: string) {
        this.id = id;
        this.tz = tz;
        this.ageCategory = ageCategory;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.mail = mail;
    }
    id: number;
    tz: number;
    ageCategory: number;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    mail: string;
}
