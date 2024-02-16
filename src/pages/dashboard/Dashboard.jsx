import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import ExpenseChart from "./ExpenseChart";
import AmountChart from "./AmountChart";
import ClientsTable from "./ClientsTable";
import { GetAll } from "utils/CrudApi";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [obj, setObj] = useState({});
  useEffect(() => {
    const fetched = async () => {
      const data = await GetAll("dashboard");
      setObj(data.data);
      setIsLoading(false);
    };
    fetched();
  }, []);
  return (
    <>
      <Cards data={obj} isLoading={isLoading} />
      {/* <AmountChart />
      <ExpenseChart /> */}
      {/* <ClientsTable /> */}
    </>
  );
}
