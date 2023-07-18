import { PostFile as TPostFile } from "../api/postFile/PostFile";

export const POSTFILE_TITLE_FIELD = "id";

export const PostFileTitle = (record: TPostFile): string => {
  return record.id || String(record.id);
};
