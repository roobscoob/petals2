import { Block } from "../..";
import { ValueField } from "../../field/value";

export class BackdropNumberName extends Block {
  constructor(numberName: "number" | "name" = "number") {
    super("looks_backdropnumbername");

    this.setNumberName(numberName);
  }

  setNumberName(numberName: "number" | "name") {
    this.setField("NUMBER_NAME", new ValueField(numberName));
  }

  getNumberName(): "number" | "name" {
    const field = this.getField("NUMBER_NAME")!;

    if (!(field instanceof ValueField)) {
      throw new Error("BackdropNumberName NUMBER_NAME field is not a value field");
    }

    return field.getValue() as "number" | "name";
  }
}
