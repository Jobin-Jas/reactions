import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  posts?: PostWhereUniqueInput | null;
  roles: InputJsonValue;
  username: string;
};
