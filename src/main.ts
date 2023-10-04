import { Log, OnExecutedArgs, PieTaskAddon } from "pielette-core";
import {Key, keyboard} from "@nut-tree/nut-js";
import {keyConversionMap} from "./KeyConversionMap";

export class Main extends PieTaskAddon {
  onExecuted(args: OnExecutedArgs): void {
    Log.addon.debug("Received args: " + JSON.stringify(args));

    const rawKeys = args["Keys"].split("+");

    const keys: Key[] = [];
    for (let rawKey of rawKeys) {
      rawKey = rawKey.trim();
      const keyEnumMap = new Map(Object.entries(Key));
      const key = keyConversionMap.get(rawKey) ?? "The key doesn't exist in the conversion map"

      if (rawKey !== "None" && keyEnumMap.has(key)) {
        keys.push(keyEnumMap.get(key)! as Key);
      }
    }

    Log.addon.debug("Sending keys: " + JSON.stringify(keys));

    keyboard.pressKey(...keys);
    keyboard.releaseKey(...keys);
  }

}
