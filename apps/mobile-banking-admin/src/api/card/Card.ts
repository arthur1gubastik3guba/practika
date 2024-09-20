import { Account } from "../account/Account";

export type Card = {
  account?: Account | null;
  cardNumber: string | null;
  cardType?: "Option1" | null;
  createdAt: Date;
  expirationDate: Date | null;
  id: string;
  updatedAt: Date;
};
