import { Post } from "../post/Post";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  posts?: Post | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
