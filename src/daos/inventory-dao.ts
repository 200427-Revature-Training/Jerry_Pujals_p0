import { database } from '../daos/database';
import { Inventory, InventoryRow } from '../models/Inventory';


// SQL functions


export function GetInventory(): Promise<Inventory[]> {
    const sql = 'SELECT * FROM inventory';

       return database.query<InventoryRow>(sql, []).then(result => {
     const rows: InventoryRow[] = result.rows;

        console.log(rows);

        
        const  inventories: Inventory[] = rows.map(row => Inventory.from(row));
        return inventories;
    });
}