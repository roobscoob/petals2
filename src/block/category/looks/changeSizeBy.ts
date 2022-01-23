import { NumberInput } from "../../input/number";
import { Input } from "../../input";
import { Block } from "../..";

export class ChangeSizeBy extends Block {
  constructor(change: Input | number = 10) {
    super("looks_changesizeby");

    this.setChange(change);
  }

  setChange(change: Input | number): this {
    if (typeof change === "number") {
      change = Input.shadowed(new NumberInput(change));
    }

    // block checking
    change.link(this);

    this.setInput("CHANGE", change);

    return this;
  }

  getChange(): Input {
    return this.getInput("CHANGE")!;
  }
}
