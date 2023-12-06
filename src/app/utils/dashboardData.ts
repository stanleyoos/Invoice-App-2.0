import { Invoice } from "../lib/interfaces";
import { amountFormat } from "./format";

export const calcAmout = (invoices: Invoice[]): any => {
  return amountFormat(
    invoices.reduce((accu, curr) => (accu += curr.amount), 0)
  );
};
