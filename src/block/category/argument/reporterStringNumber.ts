import { Block } from "../..";
import { ValueField } from "../../field/value";

export class ReporterStringNumber extends Block {
  constructor(name: string) {
    super("argument_reporter_string_number");

    this.setName(name);
  }

  setName(name: string): this {
    this.setField("VALUE", new ValueField(name));
    return this;
  }

  getName(): string {
    const field = this.getField("VALUE");

    if (!(field instanceof ValueField)) {
      throw new Error("ReporterStringNumber VALUE field is not a value field");
    }

    return field.getValue() as string;
  }
}