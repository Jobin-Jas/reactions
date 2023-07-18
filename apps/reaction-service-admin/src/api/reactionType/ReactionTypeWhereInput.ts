import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReactionTypeWhereInput = {
  id?: StringFilter;
  typeName?: StringNullableFilter;
};
