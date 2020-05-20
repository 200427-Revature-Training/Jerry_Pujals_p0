import express from 'express';
import bodyParser from 'body-parser';
import { AccountRouter } from '../../src/router/Account-router';
import * as AccountService from '../../src/services/Account-service';
import request from 'supertest';

// Mock of account service
jest.mock('../../src/services/Account-service');
const mockAccountService = AccountService as any;

// Server/Middlewear
const app = express();
app.use(bodyParser.json())
app.use('/Admin_Accounts', AccountRouter);

describe('GET /Admin_Accounts', () => {
    test('Returns normally under normal circumstances', async () => {
        mockAccountService.adminGetAccounts.mockImplementation(async () => []);
        await request(app)
            
            .get('/Admin_Accounts')
            // Expect 200
            .expect(200)
            
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test('Returns normally under normal circumstances', async () => {
        mockAccountService.adminGetAccounts.mockImplementation(async () => {throw new Error()});
        await request(app)
            .get('/Admin_Accounts')
            .expect(500);
    });
});