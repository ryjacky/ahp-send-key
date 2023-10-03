import { ActionPlugin, Log, OnExecutedArgs } from "pielette-core";

export class Main implements ActionPlugin {
  // @ts-ignore
  onExecuted(args: OnExecutedArgs): void {
    Log.main.info("Hello world! from pielette addon sendkey");
  }

}
