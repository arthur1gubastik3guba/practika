import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "fullName";

export const CustomerTitle = (record: TCustomer): string => {
  return record.fullName?.toString() || String(record.id);
};
