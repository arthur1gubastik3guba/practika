import { AccountCreateNestedManyWithoutCustomersInput } from "./AccountCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  accounts?: AccountCreateNestedManyWithoutCustomersInput;
  address?: string | null;
  birthdate?: Date | null;
  email?: string | null;
  fullName?: string | null;
  phoneNumber?: string | null;
};
