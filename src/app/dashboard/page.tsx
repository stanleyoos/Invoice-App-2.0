import React from "react";
import styles from "./styles.module.css";
import DashboardWelcome from "../../components/ui/dashboard/DashboardWelcome";
import TotalInInvoices from "../../components/ui/dashboard/TotalInInvoices";
import PaidInvoices from "../../components/ui/dashboard/PaidInvoices";
import { fetchFilteredInvoices } from "../lib/data";
import { calcTotalAmout, calcInvoices } from "../utils/dashboardData";
import { Invoice } from "../lib/interfaces";
import { auth } from "@clerk/nextjs";

const Page = async () => {
  const invoices: Invoice[] = await fetchFilteredInvoices("");
  const { sessionClaims }: any = auth();
  const name: string = sessionClaims.firstName;
  const totalAmount = calcTotalAmout(invoices);
  const totalPaidAmount = calcInvoices(invoices, "paid");
  const totalUnpaidAmount = calcInvoices(invoices, "pending");
  return (
    <>
      <h1 className="text-center text-6xl text-sky-500">Dashboard</h1>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <DashboardWelcome name={name} />
        </div>
        <div className={styles.gridItem}>
          <TotalInInvoices total={totalAmount} />
        </div>
        <div className={styles.gridItem}>
          <PaidInvoices amountInvoices={totalPaidAmount} condition="paid" />
        </div>
        <div className={styles.gridItem}>
          <PaidInvoices amountInvoices={totalUnpaidAmount} condition="unpaid" />
        </div>
        {/* <div className={styles.gridItem}>05</div>
        <div className={styles.gridItem}>06</div>
        <div className={styles.gridItem}>07</div>
        <div className={styles.gridItem}>08</div>
        <div className={styles.gridItem}>09</div> */}
      </div>
    </>
  );
};
export default Page;
