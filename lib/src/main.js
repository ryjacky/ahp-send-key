"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const autohotpie_core_1 = require("autohotpie-core");
class Main {
    onExecuted(args) {
        autohotpie_core_1.Log.main.info(args.get("text"));
    }
}
exports.Main = Main;
