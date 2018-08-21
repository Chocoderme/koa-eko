import { EkoRouteDecorator } from "../types/EkoRouteDecorator.type";
import { RouteType } from "../enums/routeType.enum";
import { EkoRoute } from "./route.decorator";

export function EkoPost(path: string, name?: string, description?: string): EkoRouteDecorator {

    return EkoRoute(RouteType.POST, path, name, description);
}
