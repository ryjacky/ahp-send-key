import { ActionPlugin, Log, OnExecutedArgs } from "pielette-core";
import { Key, keyboard } from "@nut-tree/nut-js";

export class Main implements ActionPlugin {
  // @ts-ignore
  onExecuted(args: OnExecutedArgs): void {
    Log.main.info("Hello world! from pielette addon sendkey");
    keyboard.pressKey(Key.LeftWin);
    keyboard.releaseKey(Key.LeftWin);
  }

}
