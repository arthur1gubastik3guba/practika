import { Card } from "../card/Card";
import { Customer } from "../customer/Customer";
import { Transaction } from "../transaction/Transaction";

export type Account = {
  accountNumber: string | null;
  accountType?: "Option1" | null;
  balance: number | null;
  cards?: Array<Card>;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
