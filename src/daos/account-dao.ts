import { database } from '../daos/database';
import { Account, AccountRow } from '../models/Account';


// SQL functions


export function adminGetAccounts(): Promise<Account[]> {
    const sql = 'SELECT * FROM accountinfo';

       return database.query<AccountRow>(sql, []).then(result => {
     const rows: AccountRow[] = result.rows;

        console.log(rows);

        
        const  accounts: Account[] = rows.map(row => Account.from(row));
        return accounts;
    });
}