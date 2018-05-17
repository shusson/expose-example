import { plainToClass } from "class-transformer";
import { EntityClassExpose } from "./entity-class-level";
import { EntityPropertyExpose } from "./entity-property-level";

const blob = {
  id: "fred",
  junk: {
    junk: "junk"
  }
};

const x = plainToClass(EntityClassExpose, blob, { strategy: "excludeAll" });
const y = plainToClass(EntityPropertyExpose, blob, { strategy: "excludeAll" });

console.log(x);
console.log(y);
