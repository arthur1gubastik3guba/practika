import { Account } from "../account/Account";

export type Transaction = {
  account?: Account | null;
  amount: number | null;
  createdAt: Date;
  id: string;
  timestamp: Date | null;
  transactionType?: "Option1" | null;
  updatedAt: Date;
};
