import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type CardCreateInput = {
  account?: AccountWhereUniqueInput | null;
  cardNumber?: string | null;
  cardType?: "Option1" | null;
  expirationDate?: Date | null;
};
