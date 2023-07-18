import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringFilter;
  userId?: UserWhereUniqueInput;
};
