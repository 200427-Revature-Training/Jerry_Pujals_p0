import { database } from '../daos/database';
import { Shipment, ShipmentRow } from '../models/Shipment';


// SQL functions

// Returns Shipments
export function adminGetShipments(): Promise<Shipment[]> {
    const sql = 'SELECT * FROM orders';

       return database.query<ShipmentRow>(sql, []).then(result => {
     const rows: ShipmentRow[] = result.rows;

        console.log(rows);

        
        const  shipments: Shipment[] = rows.map(row => Shipment.from(row));
        return shipments;
    });
}


// Makes a shipment
export function addItem(inventory: Inventory): Promise<Inventory> {
    
    const sql = `INSERT INTO inventory (itemname,ammount,price) \
VALUES ($1, $2, $3) RETURNING *`;

    return database.query<InventoryRow>(sql, [
        inventory.itemname,
        inventory.ammount,
        inventory.price
        
    ]).then(result => result.rows.map(row => Inventory.from(row))[0]);
}


// Removes a shipment
export function removeItem(itemid: number): Promise<Inventory> {    
   
    const sql = 'DELETE FROM public.inventory WHERE itemid= $1';
    return database.query<InventoryRow>(sql, [itemid])
        .then(result => result.rows.map(row => Inventory.from(row))[0]);
}