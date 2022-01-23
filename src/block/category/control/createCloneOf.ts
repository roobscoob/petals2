import { Input } from "../../input";
import { Block } from "../..";

export class CreateCloneOf extends Block {
  constructor(cloneOption: Input) {
    super("control_create_clone_of");

    this.setCloneOption(cloneOption);
  }

  setCloneOption(cloneOption: Input): this {
    cloneOption.link(this);

    this.setInput("CLONE_OPTION", cloneOption);

    return this;
  }

  getCloneOption(): Input {
    return this.getInput("CLONE_OPTION")!;
  }
}
