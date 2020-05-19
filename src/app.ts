import express from 'express';
import bodyParser from 'body-parser';
import { database } from './daos/database';
import { AccountRouter } from './router/Account-router';

// Make this a constant
const app = express();
// Setting port to access
const port = process.env.port || 3000;
app.set('port', port);

// Middleware

app.use(bodyParser.json());

app.use('/Admin_Accounts', AccountRouter);

// Error handelling
process.on('unhandledRejection', () => {
    database.end().then(() => {
        console.log('Database pool closed');
    });
});

// Logs
app.listen(port, () => {
    console.log(`Home app running at http://localhost:${port}`);
});