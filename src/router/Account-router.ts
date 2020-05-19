import express from 'express';
import * as AccountService from '../services/Account-service';

// Set export
export const AccountRouter = express.Router();

//     http://localhost:3000/account

AccountRouter.get('', (request, response, next) => {
    AccountService.adminGetAccounts().then(accounts => {
        response.set('content-type', 'application/json');
        response.json(accounts);
        next();
    }).catch(err => {
        response.sendStatus(500);
    });
});
