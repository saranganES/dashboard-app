import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TopCustomersChart = ({ orders }) => {

  const customerTotals = {};
  orders.forEach((order) => {
    const customerName = order.Customer_Name;
    const totalOrderValue = order.Items.reduce((sum, item) => sum + item.Total_Price, 0);
    customerTotals[customerName] = (customerTotals[customerName] || 0) + totalOrderValue;
  });

  const sortedCustomers = Object.entries(customerTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const customerLabels = sortedCustomers.map((customer) => customer[0]);
  const customerDataValues = sortedCustomers.map((customer) => customer[1]);
  const colors = ["#3B82F6", "#EF4444", "#F59E0B", "#10B981", "#8B5CF6"];

  const customerData = {
    labels: customerLabels,
    datasets: [
      {
        label: "Top 5 Customers",
        data: customerDataValues,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const customerOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ height: "400px", marginBottom: "20px", paddingBottom:"20px" }}>
      <h2 className="font-bold my-4">Top 5 Customers</h2>
      <Bar data={customerData} options={customerOptions} />
    </div>
  );
};

export default TopCustomersChart;
