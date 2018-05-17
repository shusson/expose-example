import { Expose } from "class-transformer";

export class EntityPropertyExpose {
  @Expose() id: string;
}
