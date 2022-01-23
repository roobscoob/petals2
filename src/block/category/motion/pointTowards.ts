import { Block } from "../..";
import { Input } from "../../input";
import { NumberInput } from "../../input/number";

export class PointTowards extends Block {
  constructor(towards: Input) {
    super("motion_pointtowards");

    this.setTowards(towards);
  }

  setTowards(towards: Input): this {
    towards.link(this);

    this.setInput("TOWARDS", towards);

    return this;
  }

  getTowards(): Input {
    return this.getInput("TOWARDS")!;
  }
}
