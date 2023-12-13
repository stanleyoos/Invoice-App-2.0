"use client";

import { Invoice } from "@/app/lib/interfaces";
import React from "react";
import { VictoryPie } from "victory";
import { calcInvoices } from "@/app/utils/dashboardData";

const Chart = ({ invoices }: { invoices: Invoice[] }) => {
  const paid = calcInvoices(invoices, "paid");
  const unpaid = calcInvoices(invoices, "pending");
  return (
    <>
      <VictoryPie
        data={[
          { x: "Paid", y: paid },
          { x: "Unpaid", y: unpaid },
        ]}
      />
    </>
  );
};

export default Chart;
