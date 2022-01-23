import { Block } from "../..";
import { Input } from "../../input";
import { NumberInput } from "../../input/number";

export class GlideSecsToXy extends Block {
  constructor(secs: number | Input = 1, x: number | Input = 0, y: number | Input = 0) {
    super("motion_glidesecstoxy");

    this.setSecs(secs);
    this.setX(x);
    this.setY(y);
  }

  setSecs(secs: number | Input): this {
    if (typeof secs === "number") {
      secs = Input.shadowed(new NumberInput(secs));
    }

    // block checking
    secs.link(this);

    this.setInput("SECS", secs);

    return this;
  }

  getSecs(): Input {
    return this.getInput("SECS")!;
  }

  setX(x: number | Input): this {
    if (typeof x === "number") {
      x = Input.shadowed(new NumberInput(x));
    }

    // block checking
    x.link(this);

    this.setInput("X", x);

    return this;
  }

  getX(): Input {
    return this.getInput("X")!;
  }

  setY(y: number | Input): this {
    if (typeof y === "number") {
      y = Input.shadowed(new NumberInput(y));
    }

    // block checking
    y.link(this);

    this.setInput("Y", y);

    return this;
  }

  getY(): Input {
    return this.getInput("Y")!;
  }
}
