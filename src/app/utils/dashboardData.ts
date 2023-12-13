import { Invoice } from "../lib/interfaces";
import { amountFormat } from "./format";

export const calcTotalAmout = (invoices: Invoice[]): string => {
  return amountFormat(
    invoices.reduce((accu, curr) => (accu += curr.amount), 0)
  );
};

export const calcInvoices = (
  invoices: Invoice[],
  condition: string
): number => {
  const paidInvoices = invoices.filter((inv) => inv.status === condition);
  return paidInvoices.reduce((accu, curr) => (accu += curr.amount), 0);
};
