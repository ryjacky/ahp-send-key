import { IAddonHeader } from "pielette-core";

/**
 * This class is used to describe the properties of the plugin.
 */
export class AddonHeader implements IAddonHeader {
  displayName: string = "Send Key";
  receiveArgs?: { argName: string; fieldType: string; }[] = [{argName: "Keys", fieldType: "hotkeys"}];
}
