import { Post } from "../post/Post";

export type PostFile = {
  createdAt: Date;
  id: string;
  postId?: Post;
  updatedAt: Date;
};
