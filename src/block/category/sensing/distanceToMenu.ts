import { Block } from "../..";
import { Sprite } from "../../../target/sprite";
import { Stage } from "../../../target/stage";
import { ValueField } from "../../field/value";

export class DistanceToMenu extends Block {
  constructor(object: Sprite | string = "_mouse_") {
    super("sensing_distancetomenu");

    this.setObject(object);
  }

  setObject(object: Sprite | string = "_mouse_"): this {
    this.setField("DISTANCETOMENU", new ValueField(object instanceof Sprite ? object.getName() : object));

    return this;
  }

  getObject(): string {
    const field = this.getField("DISTANCETOMENU");

    if (!(field instanceof ValueField)) {
      throw new Error("DistanceToMenu DISTANCETOMENU field is not a value field");
    }

    return field.getValue() as string;
  }
}
