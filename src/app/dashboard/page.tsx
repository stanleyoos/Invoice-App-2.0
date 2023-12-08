import React from "react";
import DashboardPanel from "../../components/ui/dashboard/DashboardPanel";
import { fetchFilteredInvoices } from "../lib/data";
import { Invoice } from "../lib/interfaces";


const Page = async () => {
  const invoices: Invoice[] = await fetchFilteredInvoices("");
  
  return (
    <>
      <h1 className="text-center text-6xl text-sky-500">Dashboard</h1>
      {invoices.length == 0 ? (<>
        <div>
          You do not have any invoices!
        </div>
      </>) : (<>
        <DashboardPanel invoices={invoices} />
      </>)}
    </>
  );
};
export default Page;
