import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CardListRelationFilter } from "../card/CardListRelationFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type AccountWhereInput = {
  accountNumber?: StringNullableFilter;
  accountType?: "Option1";
  balance?: FloatNullableFilter;
  cards?: CardListRelationFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  transactions?: TransactionListRelationFilter;
};
