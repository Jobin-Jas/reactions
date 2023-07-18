import { ReactionType as TReactionType } from "../api/reactionType/ReactionType";

export const REACTIONTYPE_TITLE_FIELD = "typeName";

export const ReactionTypeTitle = (record: TReactionType): string => {
  return record.typeName || String(record.id);
};
