import React from "react";

const TotalInInvoices = ({ total }: { total: string }) => {
  return (
    <div className="flex-col">
      <p className="text-slate-400">total in invoices:</p>
      <h2>{total}</h2>
    </div>
  );
};

export default TotalInInvoices;
