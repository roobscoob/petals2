import { ListField } from "../../field/list";
import { List } from "../../../list";
import { Block } from "../..";

export class ShowList extends Block {
  constructor(list: List) {
    super("data_showlist");

    this.setList(list);
  }

  setList(list: List): this {
    this.setField("LIST", new ListField(list));
    return this;
  }

  getList(): List {
    const field = this.getField("LIST");

    if (!(field instanceof ListField)) {
      throw new Error("ShowList LIST field is not a list field");
    }

    return field.getValue() as List;
  }
}
