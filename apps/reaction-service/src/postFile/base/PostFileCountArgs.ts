/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PostFileWhereInput } from "./PostFileWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PostFileCountArgs {
  @ApiProperty({
    required: false,
    type: () => PostFileWhereInput,
  })
  @Field(() => PostFileWhereInput, { nullable: true })
  @Type(() => PostFileWhereInput)
  where?: PostFileWhereInput;
}

export { PostFileCountArgs as PostFileCountArgs };
