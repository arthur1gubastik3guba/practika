import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type TransactionCreateInput = {
  account?: AccountWhereUniqueInput | null;
  amount?: number | null;
  timestamp?: Date | null;
  transactionType?: "Option1" | null;
};
