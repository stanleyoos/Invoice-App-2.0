import React from "react";
import DashboardPanel from "../../components/ui/dashboard/DashboardPanel";
import { fetchFilteredInvoices } from "../lib/data";
import { Invoice } from "../lib/interfaces";
import CreateButton from "../../components/ui/buttons/createButton";

const Page = async () => {
  const invoices: Invoice[] = await fetchFilteredInvoices("");

  return (
    <>
      <h1 className="text-center text-6xl text-sky-500">Dashboard</h1>
      {invoices.length == 0 ? (
        <>
          <h1 className="text-center text-2xl  mt-12">
            You do not have any invoices!
          </h1>
          <div className="flex justify-center mt-12">
            <CreateButton href="/invoices/create" name="Add Invoice" />
          </div>
        </>
      ) : (
        <>
          <DashboardPanel invoices={invoices} />
        </>
      )}
    </>
  );
};
export default Page;
