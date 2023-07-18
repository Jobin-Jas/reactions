import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostFileServiceBase } from "./base/postFile.service.base";

@Injectable()
export class PostFileService extends PostFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
