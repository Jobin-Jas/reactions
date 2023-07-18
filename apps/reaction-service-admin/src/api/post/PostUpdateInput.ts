import { PostFileWhereUniqueInput } from "../postFile/PostFileWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  description?: string | null;
  postFiles?: PostFileWhereUniqueInput | null;
  title?: string;
  userId?: UserWhereUniqueInput;
};
