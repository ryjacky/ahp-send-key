import { PluginProperties, PluginType } from "pielette-core";
/**
 * This class is used to describe the properties of the plugin.
 */
export declare class Properties implements PluginProperties {
    author: string;
    description: string;
    name: string;
    type: PluginType;
    parameters: {
        name: string;
        type: string;
    }[];
    id: string;
}
