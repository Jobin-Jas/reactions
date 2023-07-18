import { Module } from "@nestjs/common";
import { ReactionTypeModuleBase } from "./base/reactionType.module.base";
import { ReactionTypeService } from "./reactionType.service";
import { ReactionTypeController } from "./reactionType.controller";
import { ReactionTypeResolver } from "./reactionType.resolver";

@Module({
  imports: [ReactionTypeModuleBase],
  controllers: [ReactionTypeController],
  providers: [ReactionTypeService, ReactionTypeResolver],
  exports: [ReactionTypeService],
})
export class ReactionTypeModule {}
