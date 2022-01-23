import { Input } from "../../input";
import { Block } from "../..";

export class SwitchBackdropTo extends Block {
  constructor(backdrop: Input) {
    super("looks_switchbackdropto");

    this.setBackdrop(backdrop);
  }

  setBackdrop(backdrop: Input): this {
    backdrop.link(this);

    this.setInput("BACKDROP", backdrop);

    return this;
  }

  getBackdrop(): Input {
    return this.getInput("BACKDROP")!;
  }
}
