import { Inventory } from '../models/Inventory';
import * as InventoryDao from '../daos/inventory-dao';


// Calls sql function in daos
export function GetInventory(): Promise<Inventory[]> {

    return InventoryDao.GetInventory();


}