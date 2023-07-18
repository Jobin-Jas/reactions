import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  description?: string | null;
  title: string;
  userId: UserWhereUniqueInput;
};
