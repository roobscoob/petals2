import { Block } from "../..";
import { Input } from "../../input";
import { NumberInput } from "../../input/number";

export class ChangeXBy extends Block {
  constructor(dX: number | Input = 10) {
    super("motion_changexby");

    this.setDx(dX);
  }

  setDx(dX: number | Input): this {
    if (typeof dX === "number") {
      dX = Input.shadowed(new NumberInput(dX));
    }

    // block checking
    dX.link(this);

    this.setInput("DX", dX);

    return this;
  }

  getDx(): Input {
    return this.getInput("DX")!;
  }
}
