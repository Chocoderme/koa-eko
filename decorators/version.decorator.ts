import "reflect-metadata";
import { EkoControllerDecorator } from "../types/EkoControllerDecorator.type";

export function EkoVersion(version: string): EkoControllerDecorator {

    return function<Function>(target: Function): void {
        Reflect.defineMetadata("eko:version", version, target);
    };

}
