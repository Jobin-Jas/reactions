import { PostFileWhereInput } from "./PostFileWhereInput";
import { PostFileOrderByInput } from "./PostFileOrderByInput";

export type PostFileFindManyArgs = {
  where?: PostFileWhereInput;
  orderBy?: Array<PostFileOrderByInput>;
  skip?: number;
  take?: number;
};
