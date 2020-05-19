export class Account {

Name: string;
Accid: number;
Password: string;
Address: string;
card: number;


// Structure of account

static from(obj: AccountRow): Account {
    const account = new Account(obj.Name, obj.Accid, obj.Password, obj.Address, obj.card);
    return account;
}

constructor(Name: string, Accid: number, Password: string, Address: string, card: number) {
    this.Name = Name;
    this.Accid = Accid;
    this.Password = Password;
    this.Address = Address;
    this.card = card;
}


}


export interface AccountRow {

    Name: string;
    Accid: number;
    Password: string;
    Address: string;
    card: number;


}