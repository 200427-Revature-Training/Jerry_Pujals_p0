import { Shipment } from '../models/Shipment';
import * as ShipmentDao from '../daos/shipment-dao';


// Calls sql function in daos
export function adminGetShipments(): Promise<Shipment[]> {

    return ShipmentDao.adminGetShipments();


}