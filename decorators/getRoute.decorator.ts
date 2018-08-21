import { EkoRouteDecorator } from "../types/EkoRouteDecorator.type";
import { RouteType } from "../enums/routeType.enum";
import { EkoRoute } from "./route.decorator";

export function EkoGet(path: string, name?: string, description?: string): EkoRouteDecorator {

    return EkoRoute(RouteType.GET, path, name, description);
}
