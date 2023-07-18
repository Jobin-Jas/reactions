import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PostFileService } from "./postFile.service";
import { PostFileControllerBase } from "./base/postFile.controller.base";

@swagger.ApiTags("postFiles")
@common.Controller("postFiles")
export class PostFileController extends PostFileControllerBase {
  constructor(
    protected readonly service: PostFileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
