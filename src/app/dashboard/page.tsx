import React from "react";
import styles from "./styles.module.css";
import { fetchFilteredInvoices } from "../lib/data";
import { calcAmout } from "../utils/dashboardData";
import { Invoice } from "../lib/interfaces";
import { auth } from "@clerk/nextjs";

const Page = async () => {
  const invoices: Invoice[] = await fetchFilteredInvoices("");
  const { sessionClaims }: any = auth();
  const name = sessionClaims.firstName;
  const amount = calcAmout(invoices);
  return (
    <>
      <h1 className="text-center text-6xl text-sky-500">Dashboard</h1>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>Hello {name}!</div>
        <div className={styles.gridItem}>Total amount: {amount}</div>
        <div className={styles.gridItem}>03</div>
        <div className={styles.gridItem}>04</div>
        <div className={styles.gridItem}>05</div>
        <div className={styles.gridItem}>06</div>
        <div className={styles.gridItem}>07</div>
        <div className={styles.gridItem}>08</div>
        <div className={styles.gridItem}>09</div>
      </div>
    </>
  );
};
export default Page;
