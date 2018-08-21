import { IMiddleware } from "koa-router";

export interface IEkoController {
    Routes(): IMiddleware;
    AllowedMethods(): IMiddleware;
}
