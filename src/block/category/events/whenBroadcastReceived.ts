import { Block } from "../..";
import { Broadcast } from "../../../broadcast";
import { BroadcastField } from "../../field/broadcast";

export class WhenBroadcastReceived extends Block {
  constructor(broadcastOption: Broadcast) {
    super("event_whenbroadcastreceived");

    this.setBroadcastOption(broadcastOption);
  }

  setBroadcastOption(broadcastOption: Broadcast): this {
    this.setField("BROADCAST_OPTION", new BroadcastField(broadcastOption));

    return this;
  }

  getBroadcastOption(): Broadcast {
    const field = this.getField("BROADCAST_OPTION")!;

    if (!(field instanceof BroadcastField)) {
      throw new Error("WhenBroadcastReceived BROADCAST_OPTION field is not a broadcast field");
    }

    return field.getValue();
  }
}
