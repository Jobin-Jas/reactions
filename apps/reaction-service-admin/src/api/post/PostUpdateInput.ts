import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  description?: string | null;
  title?: string;
  userId?: UserWhereUniqueInput;
};
