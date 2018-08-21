import { IMiddleware } from "koa-router";

export type EkoRouteDecorator = (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<IMiddleware>) => void;
