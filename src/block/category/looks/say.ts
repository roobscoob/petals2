import { StringInput } from "../../input/string";
import { Input } from "../../input";
import { Block } from "../..";

export class Say extends Block {
  constructor(message: Input | string = "Hello!") {
    super("looks_say");

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
