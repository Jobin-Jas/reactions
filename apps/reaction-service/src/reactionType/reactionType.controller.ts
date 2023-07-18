import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReactionTypeService } from "./reactionType.service";
import { ReactionTypeControllerBase } from "./base/reactionType.controller.base";

@swagger.ApiTags("reactionTypes")
@common.Controller("reactionTypes")
export class ReactionTypeController extends ReactionTypeControllerBase {
  constructor(
    protected readonly service: ReactionTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
