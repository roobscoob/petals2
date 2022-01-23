import { Block } from "../..";
import { Input } from "../../input";
import { NumberInput } from "../../input/number";

export class SetX extends Block {
  constructor(x: number | Input = 0) {
    super("motion_setx");

    this.setX(x);
  }

  setX(x: number | Input): this {
    if (typeof x === "number") {
      x = Input.shadowed(new NumberInput(x));
    }

    // block checking
    x.link(this);

    this.setInput("X", x);

    return this;
  }

  getX(): Input {
    return this.getInput("X")!;
  }
}
