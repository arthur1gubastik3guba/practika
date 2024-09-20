import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CardWhereInput = {
  account?: AccountWhereUniqueInput;
  cardNumber?: StringNullableFilter;
  cardType?: "Option1";
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
};
