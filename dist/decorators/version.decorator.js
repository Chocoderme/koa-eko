"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function EkoVersion(version) {
    return function (target) {
        Reflect.defineMetadata("eko:version", version, target);
    };
}
exports.EkoVersion = EkoVersion;
//# sourceMappingURL=version.decorator.js.map