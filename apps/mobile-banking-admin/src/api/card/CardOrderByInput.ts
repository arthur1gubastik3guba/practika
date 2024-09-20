import { SortOrder } from "../../util/SortOrder";

export type CardOrderByInput = {
  accountId?: SortOrder;
  cardNumber?: SortOrder;
  cardType?: SortOrder;
  createdAt?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
