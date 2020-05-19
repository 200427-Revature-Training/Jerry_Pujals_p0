import express from 'express';
import * as ShipmentService from '../services/Shipment-service';

// Set export
export const ShipmentRouter = express.Router();

//     http://localhost:3000/

ShipmentRouter.get('', (request, response, next) => {
    ShipmentService.adminGetShipments().then(shipments => {
        response.set('content-type', 'application/json');
        response.json(shipments);
        next();
    }).catch(err => {
        response.sendStatus(500);
    });
});
