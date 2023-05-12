interface UserData {
    name: {
        first: string;
        last?: string;
    };
    password: string;
    email: string;
    username: string;
}
interface BookData {
    name: string;
    volume: string;
    pages: number;
    edition: string;
    released_date: Date;
    volume?: string;
    franchise?: string;
}
