import { Module } from "@nestjs/common";
import { PostFileModuleBase } from "./base/postFile.module.base";
import { PostFileService } from "./postFile.service";
import { PostFileController } from "./postFile.controller";
import { PostFileResolver } from "./postFile.resolver";

@Module({
  imports: [PostFileModuleBase],
  controllers: [PostFileController],
  providers: [PostFileService, PostFileResolver],
  exports: [PostFileService],
})
export class PostFileModule {}
