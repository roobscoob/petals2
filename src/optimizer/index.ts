import { Procedures } from "../block/category/procedures";
import { OptimizeConfig } from "../types/optimizeConfig";
import { Variable } from "../variable";

export class Optimizer {
    protected usedBroadcastChannels: Set<BroadcastChannel> = new Set;
    protected usedVariables: Set<Variable> = new Set;
    protected usedCustomBlocks: Set<typeof Procedures.Definition> = new Set;

    protected config: OptimizeConfig;

    constructor(config: Partial<OptimizeConfig> = {}) {
        this.config = {
            removeUnusedBroadcasts: true,
            removeUnusedVariables: true,
            removeUnusedCustomBlocks: true,
            removeFloatingBlocks: true,
            ...config
        };
    }

    getConfig() {
        return this.config;
    }

    shouldRemoveFloatingBlocks() {
        return this.config.removeFloatingBlocks;
    }

    markBroadcastChannelAsUsed(channel: BroadcastChannel) {
        this.usedBroadcastChannels.add(channel);
    }

    isBroadcastChannelUsed(channel: BroadcastChannel) {
        return this.usedBroadcastChannels.has(channel);
    }

    markVariableAsUsed(variable: Variable) {
        this.usedVariables.add(variable);
    }

    isVariableUsed(variable: Variable) {
        return this.usedVariables.has(variable);
    }

    markCustomBlockAsUsed(block: typeof Procedures.Definition) {
        this.usedCustomBlocks.add(block);
    }

    isCustomBlockUsed(block: typeof Procedures.Definition) {
        this.usedCustomBlocks.add(block);
    }
}