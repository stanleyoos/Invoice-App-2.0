import React from "react";

const PaidInvoices = ({
  amountInvoices,
  condition,
}: {
  amountInvoices: string;
  condition: string;
}) => {
  return (
    <div className="flex-col">
      <p className="text-slate-400">
        {condition === "paid" ? "paid" : "unpaid"}:
      </p>
      <h2>{amountInvoices}</h2>
    </div>
  );
};

export default PaidInvoices;
