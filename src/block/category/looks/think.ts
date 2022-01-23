import { StringInput } from "../../input/string";
import { Input } from "../../input";
import { Block } from "../..";

export class Think extends Block {
  constructor(message: Input | string = "Hmm...") {
    super("looks_think");

    this.setMessage(message);
  }

  setMessage(message: Input | string): this {
    if (typeof message === "string") {
      message = Input.shadowed(new StringInput(message));
    }

    // block checking
    message.link(this);

    this.setInput("MESSAGE", message);

    return this;
  }

  getMessage(): Input {
    return this.getInput("MESSAGE")!;
  }
}
