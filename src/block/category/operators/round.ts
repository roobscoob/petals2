import { Block } from "../..";
import { Input } from "../../input";
import { NumberInput } from "../../input/number";

export class Round extends Block {
  constructor(num: number | Input = 0) {
    super("operator_round");

    this.setNum(num);
  }

  setNum(num: number | Input): this {
    if (typeof num === "number") {
      num = Input.shadowed(new NumberInput(num));
    }

    // block checking
    num.link(this);

    this.setInput("NUM", num);

    return this;
  }

  getNum(): Input {
    return this.getInput("NUM")!;
  }
}
