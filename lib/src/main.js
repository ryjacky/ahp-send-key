"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const pielette_core_1 = require("pielette-core");
class Main {
    onExecuted(args) {
        pielette_core_1.Log.main.info("Hello world! from pielette addon sendkey");
    }
}
exports.Main = Main;
