import { PostFile } from "../postFile/PostFile";
import { User } from "../user/User";

export type Post = {
  createdAt: Date;
  description: string | null;
  id: string;
  postFiles?: PostFile | null;
  title: string;
  updatedAt: Date;
  userId?: User;
};
