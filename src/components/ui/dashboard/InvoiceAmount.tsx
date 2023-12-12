import React from "react";

const InvoiceAmount = ({ amount }: { amount: number }) => {
  return (
    <div className="flex-col text-center">
      <h2 className="text-6xl">{amount}</h2>
      <p className="text-slate-400 text-lg ">
        {amount == 1 ? "invoice" : "invoices"}
      </p>
    </div>
  );
};

export default InvoiceAmount;
