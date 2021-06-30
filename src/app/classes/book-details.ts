export class BookDetails {
    constructor(id?: number, title?: string, summary?: string, author?: string, ageCategory?: number,
        pageCount?: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.summary = summary;
        this.ageCategory = ageCategory;
        this.pageCount = pageCount;
    }
    id: number;
    title: string;
    author: string;
    summary: string;
    ageCategory: number;
    pageCount: number;
}
