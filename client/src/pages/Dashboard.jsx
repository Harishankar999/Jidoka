import React, { useEffect, useState } from "react";
import SocketIOClient from "socket.io-client";
import { GoogleCharts } from "google-charts";
import style from "./style/login.module.css";
import { BarChart, XAxis, Tooltip, CartesianGrid, Bar } from "recharts";
import Navbar from "../components/Navbar";
import { Text } from "@chakra-ui/react";
const Dashboard = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    setInterval(() => {
      const socket = SocketIOClient("http://127.0.0.1:4001/");
      socket.on("message", (data) => {
        setData(data);
      });
    }, 1000);
  }, []);
  return (
    <>
      <Navbar />
      <div className={style.bar}>
        <BarChart
          width={1000}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Bar type="monotone" dataKey="x" stroke="#ff7300" yAxisId={0} />
        </BarChart>
      </div>
    </>
  );
};

export default Dashboard;
