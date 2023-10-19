export interface AuthToken {
    generateToken(str: any): string;
    read(item: any): string;
}