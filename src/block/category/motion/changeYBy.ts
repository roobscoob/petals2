import { Block } from "../..";
import { Input } from "../../input";
import { NumberInput } from "../../input/number";

export class ChangeYBy extends Block {
  constructor(dY: number | Input = 10) {
    super("motion_changeyby");

    this.setDy(dY);
  }

  setDy(dY: number | Input): this {
    if (typeof dY === "number") {
      dY = Input.shadowed(new NumberInput(dY));
    }

    // block checking
    dY.link(this);

    this.setInput("DY", dY);

    return this;
  }

  getDy(): Input {
    return this.getInput("DY")!;
  }
}
