import React from "react";
import Form from "../../../components/ui/invoices/create-form";
import { fetchCustomers } from "../../lib/data";
import CreateButton from "@/components/ui/buttons/createButton";

const CreateInvoicePage = async () => {
  const customers = await fetchCustomers();
  return (
    <>
      {customers.length == 0 ? (
        <>
          <h1 className="text-center text-2xl  mt-12">
            You do not have any customers!
          </h1>
          <div className="flex justify-center mt-12">
            <CreateButton href="/customers/create" name="Add Customer" />
          </div>
        </>
      ) : (
        <main>
          <Form customers={customers} />
        </main>
      )}
    </>
  );
};
export default CreateInvoicePage;
