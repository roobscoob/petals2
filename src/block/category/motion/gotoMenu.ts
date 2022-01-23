import { Block } from "../..";
import { Sprite } from "../../../target/sprite";
import { ValueField } from "../../field/value";

export class GotoMenu extends Block {
  constructor(to: Sprite | string = "_random_") {
    super("motion_goto_menu");

    this.setTo(to);
  }

  setTo(to: Sprite | string): this {
    this.setField("TO", new ValueField(to instanceof Sprite ? to.getName() : to));

    return this;
  }

  getTo(): string {
    const field = this.getField("TO");

    if (!(field instanceof ValueField)) {
      throw new Error("GotoMenu TO field is not a value field");
    }

    return field.getValue() as string;
  }
}
