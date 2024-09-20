import { CardCreateNestedManyWithoutAccountsInput } from "./CardCreateNestedManyWithoutAccountsInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  accountNumber?: string | null;
  accountType?: "Option1" | null;
  balance?: number | null;
  cards?: CardCreateNestedManyWithoutAccountsInput;
  customer?: CustomerWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
};
