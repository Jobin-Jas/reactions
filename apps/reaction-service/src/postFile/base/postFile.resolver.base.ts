/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreatePostFileArgs } from "./CreatePostFileArgs";
import { UpdatePostFileArgs } from "./UpdatePostFileArgs";
import { DeletePostFileArgs } from "./DeletePostFileArgs";
import { PostFileCountArgs } from "./PostFileCountArgs";
import { PostFileFindManyArgs } from "./PostFileFindManyArgs";
import { PostFileFindUniqueArgs } from "./PostFileFindUniqueArgs";
import { PostFile } from "./PostFile";
import { Post } from "../../post/base/Post";
import { PostFileService } from "../postFile.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PostFile)
export class PostFileResolverBase {
  constructor(
    protected readonly service: PostFileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PostFile",
    action: "read",
    possession: "any",
  })
  async _postFilesMeta(
    @graphql.Args() args: PostFileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PostFile])
  @nestAccessControl.UseRoles({
    resource: "PostFile",
    action: "read",
    possession: "any",
  })
  async postFiles(
    @graphql.Args() args: PostFileFindManyArgs
  ): Promise<PostFile[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PostFile, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PostFile",
    action: "read",
    possession: "own",
  })
  async postFile(
    @graphql.Args() args: PostFileFindUniqueArgs
  ): Promise<PostFile | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PostFile)
  @nestAccessControl.UseRoles({
    resource: "PostFile",
    action: "create",
    possession: "any",
  })
  async createPostFile(
    @graphql.Args() args: CreatePostFileArgs
  ): Promise<PostFile> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        postId: {
          connect: args.data.postId,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PostFile)
  @nestAccessControl.UseRoles({
    resource: "PostFile",
    action: "update",
    possession: "any",
  })
  async updatePostFile(
    @graphql.Args() args: UpdatePostFileArgs
  ): Promise<PostFile | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          postId: {
            connect: args.data.postId,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PostFile)
  @nestAccessControl.UseRoles({
    resource: "PostFile",
    action: "delete",
    possession: "any",
  })
  async deletePostFile(
    @graphql.Args() args: DeletePostFileArgs
  ): Promise<PostFile | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Post, {
    nullable: true,
    name: "postId",
  })
  @nestAccessControl.UseRoles({
    resource: "Post",
    action: "read",
    possession: "any",
  })
  async resolveFieldPostId(
    @graphql.Parent() parent: PostFile
  ): Promise<Post | null> {
    const result = await this.service.getPostId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}