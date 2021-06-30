export class Lendings {
    constructor(Id: string,bookId: number, borrowerId: number,  landingDate: Date, returnDate: Date, borrowerFirstName: string, borrowerLastName: string,
        bookTitle: string) {
        this.Id = Id;
        this.borrowerId = borrowerId;
        this.borrowerFirstName = borrowerFirstName;
        this.borrowerLastName = borrowerLastName;
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.landingDate = landingDate;
        this.returnDate = returnDate;

    }
    Id: string;
    borrowerId: number;
    borrowerFirstName: string;
    borrowerLastName: string;
    bookId: number;
    bookTitle: string;
    landingDate: Date;
    returnDate: Date;
}
