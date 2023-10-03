import { Log, OnExecutedArgs, PieTaskAddon } from "pielette-core";

export class Main implements PieTaskAddon {
  onExecuted(args: OnExecutedArgs): void {
    Log.main.info("Hello from PieTaskAddon!");
  }

}
