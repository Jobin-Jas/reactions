import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  postFilesId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userPostFk?: SortOrder;
};
