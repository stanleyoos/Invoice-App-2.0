import { Invoice } from '../../../app/lib/interfaces'
import React from 'react'
import styles from "./dashboardStyles.module.css";
import DashboardWelcome from './DashboardWelcome';
import TotalInInvoices from './TotalInInvoices';
import PaidInvoices from './PaidInvoices';
import { auth } from "@clerk/nextjs";
import { calcTotalAmout, calcInvoices } from '../../../app/utils/dashboardData';

const DashboardPanel = ({invoices} : {invoices: Invoice[]}) => {
  const { sessionClaims }: any = auth();
  const name: string = sessionClaims.firstName;
  const totalAmount = calcTotalAmout(invoices);
  const totalPaidAmount = calcInvoices(invoices, "paid");
  const totalUnpaidAmount = calcInvoices(invoices, "pending");
  return (
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
  )
}

export default DashboardPanel