import { SerializedSprite, Sprite } from "./sprite";
import { SerializedStage, Stage } from "./stage";

export type SerializedTargetStore = (SerializedStage | SerializedSprite)[];

export class TargetStore {
  private _store: (Stage | Sprite)[] = [new Stage()];

  findSpriteByName(name: string): Sprite | undefined {
    for (const val of this._store) {
      if (!val.isSprite()) continue;
      if (val.getName() === name) return val;
    }
  }

  getSpriteByName(name: string): Sprite {
    const result = this.findSpriteByName(name);

    if (result === undefined) {
      throw new Error("Failed to find target by name: " + name);
    }

    return result;
  }

  createSprite(name: string): Sprite {
    const sprite = new Sprite(name);
    this._store.push(sprite);
    return sprite;
  }

  removeSpriteByName(name: string): void {
    const sprite = this.getSpriteByName(name);

    this._store = this._store.filter(val => val !== sprite);
  }

  findStage(): Stage | undefined {
    for (const val of this._store) {
      if (!val.isStage()) continue;
      return val;
    }
  }

  getStage(): Stage {
    const result = this.findStage();

    if (result === undefined) {
      throw new Error("Failed to find stage");
    }

    return result;
  }

  getSprites(): Sprite[] {
    return this._store.filter(val => val.isSprite()) as Sprite[];
  }

  getTargets(): (Stage | Sprite)[] {
    return this._store;
  }

  serialize(): SerializedTargetStore {
    return this._store.map(e => e.serialize());
  }
}
