import { Costume } from "../../../costume";
import { Block } from "../..";
import { ValueField } from "../../field/value";

export class Backdrops extends Block {
  constructor(backdrop: Costume | string) {
    super("looks_backdrops");

    this.setBackdrop(backdrop);
  }

  setBackdrop(backdrop: Costume | string): this {
    this.setField("BACKDROP", new ValueField(backdrop instanceof Costume ? backdrop.getName() : backdrop));

    return this;
  }

  getBackdrop(): Costume | string {
    const field = this.getField("BACKDROP");

    if (!(field instanceof ValueField)) {
      throw new Error("Backdrops BACKDROP field is not a value field");
    }

    return field.getValue() as Costume | string;
  }
}
