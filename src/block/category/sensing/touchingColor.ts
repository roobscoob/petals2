import { Block } from "../..";
import { ValueField } from "../../field/value";
import { Input } from "../../input";
import { ColorInput } from "../../input/color";
import { NumberInput } from "../../input/number";

export class TouchingColor extends Block {
  constructor(color1: ColorInput | Input) {
    super("sensing_touchingcolor");

    this.setColor(color1);
  }

  setColor(color: ColorInput | Input): this {
    if (color instanceof ColorInput) {
      color = Input.shadowed(color);
    }

    // block checking
    color.link(this);

    this.setInput("COLOR", color);

    return this;
  }

  getColor(): ColorInput {
    const input = this.getInput("COLOR")!;

    if (!(input instanceof ColorInput)) {
      throw new Error("ColorIsTouchingColor COLOR field is not a color input");
    }

    return input;
  }
}
