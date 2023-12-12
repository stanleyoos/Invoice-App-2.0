import { Invoice } from "../../../app/lib/interfaces";
import React from "react";
import styles from "./dashboardStyles.module.css";
import DashboardWelcome from "./DashboardWelcome";
import CustomerAmount from "./CustomerAmount";
import { auth } from "@clerk/nextjs";
import InvoiceAmount from "./InvoiceAmount";
import { fetchCustomers } from "@/app/lib/data";

const DashboardPanel = async ({ invoices }: { invoices: Invoice[] }) => {
  const { sessionClaims }: any = auth();
  const name: string = sessionClaims.firstName;
  const customers = await fetchCustomers();

  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <DashboardWelcome name={name} />
      </div>
      <div className={styles.gridItem}>
        <InvoiceAmount amount={invoices.length} />
      </div>
      <div className={styles.gridItem}>
        <CustomerAmount amount={customers.length} />
      </div>
      <div className={styles.gridItem}>
        <h1>Place for chart!</h1>
      </div>
      <div className={styles.gridItem}>05</div>
      <div className={styles.gridItem}>06</div>
      <div className={styles.gridItem}>07</div>
      <div className={styles.gridItem}>08</div>
    </div>
  );
};

export default DashboardPanel;
