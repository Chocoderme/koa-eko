import * as Router from "koa-router";
import { IEkoController } from "./interfaces/IEkoController";

export abstract class EkoController implements IEkoController {

    protected router: Router = new Router();

    public constructor(autoInit: boolean = true) {
        if (autoInit) {
            this.Initialize();
        }
    }

    protected Initialize(): void {
        if ((<any>this).InitApiController !== undefined) {
            (<any>this).InitApiController();
        }
    }

    public Routes(): Router.IMiddleware {
        return this.router.routes();
    }

    public AllowedMethods(): Router.IMiddleware {
        return this.router.allowedMethods();
    }

}
