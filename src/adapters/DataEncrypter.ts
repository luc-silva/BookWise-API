export interface DataEncrypter {
  checkIntegrity(data: any, encrypted:any): Promise<boolean>;
  encrypt(data: any): Promise<string>;
}
