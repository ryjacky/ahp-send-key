"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Properties = void 0;
const pielette_core_1 = require("pielette-core");
class Properties {
    author = "ryjacky";
    description = "Mimics keyboard keypress.";
    name = "Send Key";
    type = pielette_core_1.PluginType.ACTION_PLUGIN;
    parameters = [{ name: "Keys", type: "hotkeys" }];
    id;
}
exports.Properties = Properties;
