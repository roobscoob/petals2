import { NumberInput } from "../../input/number";
import { Input } from "../../input";
import { Block } from "../..";

export class Wait extends Block {
  constructor(duration: Input | number = 1) {
    super("control_wait");

    this.setDuration(duration);
  }

  setDuration(duration: Input | number): this {
    if (typeof duration === "number") {
      duration = Input.shadowed(new NumberInput(duration))
    }

    // block checking
    duration.link(this);

    this.setInput("DURATION", duration);

    return this;
  }

  getDuration(): Input {
    return this.getInput("DURATION")!;
  }
}
