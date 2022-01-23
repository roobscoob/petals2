import { Block } from "../..";
import { Input } from "../../input";
import { NumberInput } from "../../input/number";

export class SetVolumeTo extends Block {
  constructor(volume: number | Input = 0) {
    super("sound_setvolumeto");

    this.setVolume(volume);
  }

  setVolume(volume: number | Input): this {
    if (typeof volume === "number") {
      volume = Input.shadowed(new NumberInput(volume));
    }

    // block checking
    volume.link(this);

    this.setInput("VOLUME", volume);

    return this;
  }

  getVolume(): Input {
    return this.getInput("VOLUME")!;
  }
}
