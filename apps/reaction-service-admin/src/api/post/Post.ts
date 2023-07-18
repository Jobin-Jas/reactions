import { User } from "../user/User";

export type Post = {
  createdAt: Date;
  description: string | null;
  id: string;
  title: string;
  updatedAt: Date;
  userId?: User;
};
