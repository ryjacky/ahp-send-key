"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const pielette_core_1 = require("pielette-core");
const nut_js_1 = require("@nut-tree/nut-js");
class Main {
    // @ts-ignore
    onExecuted(args) {
        pielette_core_1.Log.main.info("Hello world! from pielette addon sendkey");
        nut_js_1.keyboard.pressKey(nut_js_1.Key.LeftWin);
        nut_js_1.keyboard.releaseKey(nut_js_1.Key.LeftWin);
    }
}
exports.Main = Main;
