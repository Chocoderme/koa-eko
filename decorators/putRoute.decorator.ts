import { EkoRouteDecorator } from "../types/EkoRouteDecorator.type";
import { RouteType } from "../enums/routeType.enum";
import { EkoRoute } from "./route.decorator";

export function EkoPut(path: string, name?: string, description?: string): EkoRouteDecorator {

    return EkoRoute(RouteType.PUT, path, name, description);
}
