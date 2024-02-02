import React from "react";
import Cards from "./Cards";
import ExpenseChart from "./ExpenseChart";
import AmountChart from "./AmountChart";
import ClientsTable from "./ClientsTable";

export default function Dashboard() {
  return (
    <>
      <Cards />
      <AmountChart />
      <ExpenseChart />
      <ClientsTable />
    </>
  );
}
