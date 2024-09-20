import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  account?: AccountWhereUniqueInput;
  amount?: FloatNullableFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  transactionType?: "Option1";
};
