import { CardUpdateManyWithoutAccountsInput } from "./CardUpdateManyWithoutAccountsInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  accountNumber?: string | null;
  accountType?: "Option1" | null;
  balance?: number | null;
  cards?: CardUpdateManyWithoutAccountsInput;
  customer?: CustomerWhereUniqueInput | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
};
