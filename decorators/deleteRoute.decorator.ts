import { EkoRouteDecorator } from "../types/EkoRouteDecorator.type";
import { RouteType } from "../enums/routeType.enum";
import { EkoRoute } from "./route.decorator";

export function EkoDelete(path: string, name?: string, description?: string): EkoRouteDecorator {

    return EkoRoute(RouteType.DELETE, path, name, description);
}
