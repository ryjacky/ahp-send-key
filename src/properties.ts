import { AddonHeader } from "pielette-core";

/**
 * This class is used to describe the properties of the plugin.
 */
export class Properties implements AddonHeader {
  displayName: string = "Send Key";
  receiveArgs?: { argName: string; fieldType: string; }[] = [{argName: "Keys", fieldType: "hotkeys"}];
}
