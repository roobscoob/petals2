import fs from "fs/promises";
import util from "util";
import path from "path";

import { Project } from "./src/project";
import { Events } from "./src/block/category/events";
import { Looks } from "./src/block/category/looks";
import { Operators } from "./src/block/category/operators";
import { Costume } from "./src/costume";
import { Optimizer } from "./src/optimizer";
import { Control } from "./src/block/category/control";

const p = new Project;

const stage = p.getTargets().getStage();

stage.getCostumes().addCostume(Costume.fromFile(path.resolve(__dirname, "./astolfo.png")));

const blockFactory = stage.getBlocks();

blockFactory.generateStack(function*() {
    yield new Events.WhenFlagClicked;
    yield new Looks.Say("coin");
    yield new Control.If(
        blockFactory.createBlock(Operators.And, undefined, undefined),
        blockFactory.generateStack(function*() {
            yield new Looks.Say("book");
        }),
    );
    yield new Looks.Say("car");
});

p.optimize(new Optimizer);

(async () => {
    console.log(util.inspect(p.serialize().targets[0].blocks, false, Infinity, true));
    fs.writeFile(path.resolve(__dirname, "./balls.sb3"), await p.toSb3());
})();
