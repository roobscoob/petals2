import { Block } from "../..";
import { Input } from "../../input";

export class Not extends Block {
  constructor(operand?: Block) {
    super("operator_not");

    if (operand) this.setOperand(operand);
  }

  setOperand(operand: Block): this {
    operand.setParent(this);
    this.setInput("OPERAND", Input.unshadowed(operand));

    return this;
  }

  getOperand(): Block | undefined {
    const input = this.getInput("OPERAND");

    if (input) {
      const topLayer = input.getTopLayer();

      if (!(topLayer instanceof Block)) {
        throw new Error("Or OPERAND input is not a block");
      }

      return topLayer;
    }
  }
}
