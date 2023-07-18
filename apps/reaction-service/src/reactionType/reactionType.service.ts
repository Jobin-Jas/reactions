import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReactionTypeServiceBase } from "./base/reactionType.service.base";

@Injectable()
export class ReactionTypeService extends ReactionTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
