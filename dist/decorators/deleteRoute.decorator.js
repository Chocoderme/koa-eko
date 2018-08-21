"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routeType_enum_1 = require("../enums/routeType.enum");
const route_decorator_1 = require("./route.decorator");
function EkoDelete(path, name, description) {
    return route_decorator_1.EkoRoute(routeType_enum_1.RouteType.DELETE, path, name, description);
}
exports.EkoDelete = EkoDelete;
//# sourceMappingURL=deleteRoute.decorator.js.map