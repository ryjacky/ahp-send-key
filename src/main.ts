import {Hotkey, Log, PieItemTaskAddon} from "pielette-core";
import {Key, keyboard} from "@nut-tree/nut-js";
import {keyMap} from "./KeyConversionMap";

export class Main implements PieItemTaskAddon {
  id: string = "official_send_keys";
  name: string = "Send Keys";

  param_Hotkey: Hotkey = new Hotkey(false, false, false, "");

  onExecuted(): void {
    Log.addon.debug("Received args: " + JSON.stringify(this.param_Hotkey));

    const keys: Key[] = [];
    if (this.param_Hotkey.shift) {keys.push(Key.LeftShift)}
    if (this.param_Hotkey.ctrl) {keys.push(Key.LeftControl)}
    if (this.param_Hotkey.alt) {keys.push(Key.LeftAlt)}

    const key = keyMap[this.param_Hotkey.key];
    if (key) {
      keys.push(key);
    }
    Log.addon.debug("Sending keys: " + JSON.stringify(keys));

    keyboard.type(...keys);
  }
}
