import { Block } from "../..";
import { Input } from "../../input";

export class SwitchCostumeTo extends Block {
  constructor(costume: Input) {
    super("looks_switchcostumeto");

    this.setCostume(costume);
  }
  
  setCostume(costume: Input): this {
    costume.link(this);

    this.setInput("COSTUME", costume);

    return this;
  }

  getCostume(): Input {
    return this.getInput("COSTUME")!;
  }
}
