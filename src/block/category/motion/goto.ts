import { Block } from "../..";
import { Input } from "../../input";

export class Goto extends Block {
  constructor(to: Input) {
    super("motion_goto");

    this.setTo(to);
  }

  setTo(to: Input): this {
    to.link(this);

    this.setInput("TO", to);

    return this;
  }

  getTo(): Input {
    return this.getInput("TO")!;
  }
}
