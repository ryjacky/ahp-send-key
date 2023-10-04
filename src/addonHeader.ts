import { IAddonHeader } from "pielette-core";
import {ReceiveArgs} from "pielette-core/lib/addon/IAddonHeader";

/**
 * This class is defines every information that is requested by the editor and vice versa.
 */
export class AddonHeader implements IAddonHeader {
  displayName: string = "Send Key";
  receiveArgs?: ReceiveArgs[] = [{argName: "Keys", fieldType: "hotkeys"}];
}
