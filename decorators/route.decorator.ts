import * as Router from "koa-router";
import { EkoRouteDecorator } from "../types/EkoRouteDecorator.type";
import { Route } from "../models/route.model";
import { RouteType } from "../enums/routeType.enum";

export function EkoRoute(type: RouteType, path: string, name?: string, description?: string): EkoRouteDecorator {

    function SetMetadatas(target: Object, infos: Route): void {
        let routes: Route[] = Reflect.getMetadata("eko:routes", target.constructor) || [];
        routes.push(infos);
        Reflect.defineMetadata("eko:routes", routes, target.constructor);
    }

    // tslint:disable-next-line:max-line-length
    return function(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<Router.IMiddleware>): void {
        let oldInitApi: PropertyDescriptor = Object.getOwnPropertyDescriptor(target, "InitApiController");
        Object.defineProperty(target, "InitApiController", {value: function():void {
            if (oldInitApi !== undefined && oldInitApi.value !== undefined) {
                (oldInitApi.value.bind(this))();
            }
            switch (type) {
                case RouteType.GET:
                    (<Router>this.router).get(path, descriptor.value.bind(this));
                    break;
                case RouteType.POST:
                    (<Router>this.router).post(path, descriptor.value.bind(this));
                    break;
                case RouteType.PUT:
                    (<Router>this.router).put(path, descriptor.value.bind(this));
                    break;
                case RouteType.DELETE:
                    (<Router>this.router).del(path, descriptor.value.bind(this));
                    break;
            }
        }, configurable: true });

        // tslint:disable-next-line:max-line-length
        SetMetadatas(target, new Route({ Path: path, Name: name, Description: description, Type: type, LinkedPropertyKey: propertyKey.toString() }));
    };
}