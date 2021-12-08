import "reflect-metadata"
import dotenv from 'dotenv';
import path from 'path';
import serverless from "serverless-http";
import ServerlessHttp from "serverless-http";
import express from 'express';
import {Customer} from "./controller/Customer";
import {useContainer, useExpressServer} from "routing-controllers";
import {Container} from "typedi";

const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv.config({
  path: dotenvPath,
});

const app = express();
useContainer(Container);
useExpressServer(app, {
  controllers: [Customer],
  cors: true
})
app.disable('x-powered-by');

export const handler: ServerlessHttp.Handler = serverless(app);
