import { Block } from "../..";
import { ValueField } from "../../field/value";

export class CostumeNumberName extends Block {
  constructor(numberName: "number" | "name" = "number") {
    super("looks_costumenumbername");

    this.setNumberName(numberName);
  }

  setNumberName(numberName: "number" | "name") {
    this.setField("NUMBER_NAME", new ValueField(numberName));
  }

  getNumberName(): "number" | "name" {
    const field = this.getField("NUMBER_NAME")!;

    if (!(field instanceof ValueField)) {
      throw new Error("CostumeNumberName NUMBER_NAME field is not a value field");
    }

    return field.getValue() as "number" | "name";
  }
}
