import { Optimizer } from "../../../optimizer";
import { Input } from "../../input";
import { NumberInput } from "../../input/number";
import { StringInput } from "../../input/string";
import { BlockKind } from "../../kinds";
import { BlockStore } from "../../store";

export class Join extends BlockKind.Reporter {
  constructor(string1: string | Input = "apple ", string2: string | Input = "banana") {
    super("operator_join");

    this.setString1(string1);
    this.setString2(string2);
  }

  setString1(string1: string | Input): this {
    if (typeof string1 === "string") {
      string1 = Input.shadowed(new StringInput(string1));
    }

    // block checking
    string1.link(this);

    this.setInput("STRING1", string1);

    return this;
  }

  getString1(): Input {
    return this.getInput("STRING1")!;
  }

  setString2(string2: string | Input): this {
    if (typeof string2 === "string") {
      string2 = Input.shadowed(new StringInput(string2));
    }

    // block checking
    string2.link(this);

    this.setInput("STRING2", string2);

    return this;
  }

  getString2(): Input {
    return this.getInput("STRING2")!;
  }

  optimize(store: BlockStore, optimizer: Optimizer) {
    this.setString1(this.getString1().optimize(store, optimizer));
    this.setString2(this.getString2().optimize(store, optimizer));

    const num1 = this.getString1().getTopLayer();
    const num2 = this.getString2().getTopLayer();
    if ((num1 instanceof NumberInput || num1 instanceof NumberInput) && (num2 instanceof StringInput || num2 instanceof NumberInput)) {
      return new StringInput(num1.getValue().toString() + num2.getValue().toString());
    }

    super.optimize(store, optimizer);
    return this;
  }
}
