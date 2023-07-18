import { SortOrder } from "../../util/SortOrder";

export type PostFileOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  postFilesFk?: SortOrder;
  updatedAt?: SortOrder;
};
