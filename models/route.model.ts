import { RouteType } from "../enums/routeType.enum";

export class Route {
    LinkedPropertyKey: string;
    Name: string;
    Path: string;
    Type: RouteType;
    Description: string;

    public constructor(init?: Partial<Route>) {
        (<any>Object).assign(this, init);
    }
}
