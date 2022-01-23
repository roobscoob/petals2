import { Block } from "../..";
import { ValueField } from "../../field/value";
import { Input } from "../../input";
import { NumberInput } from "../../input/number";

export class TouchingObject extends Block {
  constructor(object: Input) {
    super("sensing_touchingobject");

    this.setObject(object);
  }

  setObject(object: Input): this {
    // block checking
    object.link(this);

    this.setInput("TOUCHINGOBJECTMENU", object);

    return this;
  }

  getObject(): Input {
    return this.getInput("TOUCHINGOBJECTMENU")!;
  }
}
