import "reflect-metadata";
import {createConnection} from "typeorm";
import * as Koa from "koa";
import * as Router from "koa-router";
import * as bodyParser from "koa-bodyparser";
import {AppRoutes} from "./routes";

// TODO: Add eslint support
// TODO: Add test cases support
// create connection with database
createConnection().then(async connection => {

    // create koa app
    const app = new Koa();
    const router = new Router();

    // register all application routes
    AppRoutes.forEach(route => router[route.method](route.path, route.action));

    // run app
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(3000);

    console.info("Koa application is up and running on port 3000");

}).catch(error => console.error("TypeORM connection error: ", error));