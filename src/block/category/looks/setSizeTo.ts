import { NumberInput } from "../../input/number";
import { Input } from "../../input";
import { Block } from "../..";

export class SetSizeTo extends Block {
  constructor(size: Input | number = 100) {
    super("looks_setsizeto");

    this.setSize(size);
  }

  setSize(size: Input | number): this {
    if (typeof size === "number") {
      size = Input.shadowed(new NumberInput(size));
    }

    // block checking
    size.link(this);

    this.setInput("SIZE", size);

    return this;
  }

  getSize(): Input {
    return this.getInput("SIZE")!;
  }
}
