import { database } from '../daos/database';
import { Shipment, ShipmentRow } from '../models/Shipment';


// SQL functions


export function adminGetShipments(): Promise<Shipment[]> {
    const sql = 'SELECT * FROM orders';

       return database.query<ShipmentRow>(sql, []).then(result => {
     const rows: ShipmentRow[] = result.rows;

        console.log(rows);

        
        const  shipments: Shipment[] = rows.map(row => Shipment.from(row));
        return shipments;
    });
}