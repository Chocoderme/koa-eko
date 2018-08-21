"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const route_model_1 = require("../models/route.model");
const routeType_enum_1 = require("../enums/routeType.enum");
function EkoRoute(type, path, name, description) {
    function SetMetadatas(target, infos) {
        let routes = Reflect.getMetadata("eko:routes", target.constructor) || [];
        routes.push(infos);
        Reflect.defineMetadata("eko:routes", routes, target.constructor);
    }
    // tslint:disable-next-line:max-line-length
    return function (target, propertyKey, descriptor) {
        let oldInitApi = Object.getOwnPropertyDescriptor(target, "InitApiController");
        Object.defineProperty(target, "InitApiController", { value: function () {
                if (oldInitApi !== undefined && oldInitApi.value !== undefined) {
                    (oldInitApi.value.bind(this))();
                }
                switch (type) {
                    case routeType_enum_1.RouteType.GET:
                        this.router.get(path, descriptor.value.bind(this));
                        break;
                    case routeType_enum_1.RouteType.POST:
                        this.router.post(path, descriptor.value.bind(this));
                        break;
                    case routeType_enum_1.RouteType.PUT:
                        this.router.put(path, descriptor.value.bind(this));
                        break;
                    case routeType_enum_1.RouteType.DELETE:
                        this.router.del(path, descriptor.value.bind(this));
                        break;
                }
            }, configurable: true });
        // tslint:disable-next-line:max-line-length
        SetMetadatas(target, new route_model_1.Route({ Path: path, Name: name, Description: description, Type: type, LinkedPropertyKey: propertyKey.toString() }));
    };
}
exports.EkoRoute = EkoRoute;
//# sourceMappingURL=route.decorator.js.map