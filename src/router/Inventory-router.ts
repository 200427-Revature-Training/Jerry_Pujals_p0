import express from 'express';
import * as InventoryService from '../services/Inventory-service';

// Set export
export const InventoryRouter = express.Router();

//     http://localhost:3000/

InventoryRouter.get('', (request, response, next) => {
    InventoryService.GetInventory().then(inventoryies => {
        response.set('content-type', 'application/json');
        response.json(inventoryies);
        next();
    }).catch(err => {
        response.sendStatus(500);
    });
});
