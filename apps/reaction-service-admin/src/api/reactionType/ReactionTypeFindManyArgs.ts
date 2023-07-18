import { ReactionTypeWhereInput } from "./ReactionTypeWhereInput";
import { ReactionTypeOrderByInput } from "./ReactionTypeOrderByInput";

export type ReactionTypeFindManyArgs = {
  where?: ReactionTypeWhereInput;
  orderBy?: Array<ReactionTypeOrderByInput>;
  skip?: number;
  take?: number;
};
