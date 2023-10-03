import { PluginProperties, PluginType } from "pielette-core";

/**
 * This class is used to describe the properties of the plugin.
 */
export class Properties implements PluginProperties {
  author: string = "ryjacky";
  description: string = "Mimics keyboard keypress.";
  name: string = "Send Key";
  type: PluginType = PluginType.ACTION_PLUGIN;
  parameters = [{name: "Keys", type: "hotkeys"}];
  id: string = "";
}
