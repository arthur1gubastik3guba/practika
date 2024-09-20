import { Card as TCard } from "../api/card/Card";

export const CARD_TITLE_FIELD = "cardNumber";

export const CardTitle = (record: TCard): string => {
  return record.cardNumber?.toString() || String(record.id);
};
