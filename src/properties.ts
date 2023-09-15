import { PluginProperties, PluginType } from "autohotpie-core";

/**
 * This class is used to describe the properties of the plugin.
 */
export class Properties implements PluginProperties {
  author: string = "ryjacky";
  description: string = "Starter template for developing AutoHotPie plugins.";
  name: string = "Starter Template";
  type: PluginType = PluginType.ACTION_PLUGIN;
}
