import { Block } from "../..";
import { List } from "../../../list";
import { ListField } from "../../field/list";
import { Input } from "../../input";
import { NumberInput } from "../../input/number";

export class LengthOfList extends Block {
  constructor(list: List) {
    super("data_lengthoflist");

    this.setList(list);
  }

  setList(list: List): this {
    this.setField("LIST", new ListField(list));
    return this;
  }

  getList(): List {
    const field = this.getField("LIST");

    if (!(field instanceof ListField)) {
      throw new Error("LengthOfList LIST field is not a list field");
    }

    return field.getValue() as List;
  }
}
