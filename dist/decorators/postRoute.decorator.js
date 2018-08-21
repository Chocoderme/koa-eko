"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routeType_enum_1 = require("../enums/routeType.enum");
const route_decorator_1 = require("./route.decorator");
function EkoPost(path, name, description) {
    return route_decorator_1.EkoRoute(routeType_enum_1.RouteType.POST, path, name, description);
}
exports.EkoPost = EkoPost;
//# sourceMappingURL=postRoute.decorator.js.map