import { Block } from "../..";
import { Input } from "../../input";
import { NumberInput } from "../../input/number";

export class SetY extends Block {
  constructor(y: number | Input = 0) {
    super("motion_sety");

    this.setY(y);
  }

  setY(y: number | Input): this {
    if (typeof y === "number") {
      y = Input.shadowed(new NumberInput(y));
    }

    // block checking
    y.link(this);

    this.setInput("Y", y);

    return this;
  }

  getY(): Input {
    return this.getInput("Y")!;
  }
}