import { Block } from "../..";
import { Sprite } from "../../../target/sprite";
import { Stage } from "../../../target/stage";
import { ValueField } from "../../field/value";

export class SetDragMode extends Block {
  constructor(dragMode: "draggable" | "not draggable") {
    super("sensing_setdragmode");

    this.setDragMode(dragMode);
  }

  setDragMode(dragMode: "draggable" | "not draggable"): this {
    this.setField("DRAG_MODE", new ValueField(dragMode));

    return this;
  }

  getDragMode(): string {
    const field = this.getField("DRAG_MODE");

    if (!(field instanceof ValueField)) {
      throw new Error("SetDragMode DRAG_MODE field is not a value field");
    }

    return field.getValue() as string;
  }
}
