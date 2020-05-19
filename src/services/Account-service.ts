import { Account } from '../models/Account';
import * as AccountDao from '../daos/account-dao';


// Calls sql function in daos
export function adminGetAccounts(): Promise<Account[]> {

    return AccountDao.adminGetAccounts();


}