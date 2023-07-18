import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type PostFileWhereInput = {
  id?: StringFilter;
  postId?: PostWhereUniqueInput;
};
