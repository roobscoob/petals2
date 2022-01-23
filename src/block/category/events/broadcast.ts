import { Block } from "../..";
import { Input } from "../../input";
import { Broadcast as BroadcastType } from "../../../broadcast";
import { BroadcastInput } from "../../input/broadcast";

export class Broadcast extends Block {
  constructor(broadcastInput: Input | BroadcastType) {
    super("event_broadcast");

    this.setBroadcastInput(broadcastInput);
  }

  setBroadcastInput(broadcastInput: Input | BroadcastType): this {
    if (broadcastInput instanceof BroadcastType) {
      broadcastInput = Input.shadowed(new BroadcastInput(broadcastInput));
    }

    broadcastInput.link(this);

    this.setInput("BROADCAST_INPUT", broadcastInput);

    return this;
  }

  getBroadcastInput(): Input {
    return this.getInput("BROADCAST_INPUT")!;
  }
}
