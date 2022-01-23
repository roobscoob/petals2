import { Block } from "../..";
import { Input } from "../../input";

export class Play extends Block {
  constructor(sound: Input) {
    super("sound_play");

    this.setSound(sound);
  }

  setSound(sound: Input): this {
    sound.link(this);

    this.setInput("SOUND", sound);

    return this;
  }

  getSound(): Input {
    return this.getInput("SOUND")!;
  }
}
