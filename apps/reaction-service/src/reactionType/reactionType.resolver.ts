import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReactionTypeResolverBase } from "./base/reactionType.resolver.base";
import { ReactionType } from "./base/ReactionType";
import { ReactionTypeService } from "./reactionType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReactionType)
export class ReactionTypeResolver extends ReactionTypeResolverBase {
  constructor(
    protected readonly service: ReactionTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
