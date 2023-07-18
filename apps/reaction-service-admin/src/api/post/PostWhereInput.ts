import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostFileWhereUniqueInput } from "../postFile/PostFileWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  postFiles?: PostFileWhereUniqueInput;
  title?: StringFilter;
  userId?: UserWhereUniqueInput;
};
