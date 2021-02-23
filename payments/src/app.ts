import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';

import cookieSession from 'cookie-session';
import {errorHandler, NotFoundError, currentUser} from '@piyushkashyap/common/build';
import {createChargeRouter} from './routes/new';

const app = express();
app.set('trust proxy', true); //as traffic is being served by nginx ingress proxy 
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test'
    })
);
app.use(currentUser);

app.use(createChargeRouter);

//if any route which is not caught by any route handler then below function will handle that route and throw notfounderror.
app.all('*', async(req, res) => {
    throw new NotFoundError();
});

//express will use this error handler 
app.use(errorHandler);

export {app} ;