import { Block } from "../..";
import { Input } from "../../input";
import { StringInput } from "../../input/string";

export class AskAndWait extends Block {
  constructor(question: string | Input = "apple") {
    super("sensing_askandwait");

    this.setQuestion(question);
  }

  setQuestion(question: string | Input): this {
    if (typeof question === "string") {
      question = Input.shadowed(new StringInput(question));
    }

    // block checking
    question.link(this);

    this.setInput("QUESTION", question);

    return this;
  }

  getQuestion(): Input {
    return this.getInput("QUESTION")!;
  }
}
