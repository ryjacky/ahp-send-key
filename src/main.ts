import { Log, OnExecutedArgs, PieTaskAddon } from "pielette-core";

export class Main extends PieTaskAddon {
  onExecuted(args: OnExecutedArgs): void {
    Log.main.info("Hello from PieTaskAddon!");
  }

}
