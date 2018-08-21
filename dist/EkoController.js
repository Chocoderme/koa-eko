"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
class EkoController {
    constructor(autoInit = true) {
        this.router = new Router();
        if (autoInit) {
            this.Initialize();
        }
    }
    Initialize() {
        if (this.InitApiController !== undefined) {
            this.InitApiController();
        }
    }
    Routes() {
        return this.router.routes();
    }
    AllowedMethods() {
        return this.router.allowedMethods();
    }
}
exports.EkoController = EkoController;
//# sourceMappingURL=EkoController.js.map