import React from "react";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ orders }) => {
    const orderCounts = { "Dine In": 0, "Online": 0 };

    orders.forEach((order) => {
        if (order.Order_Type === "Dine In") {
            orderCounts["Dine In"] += 1;
        } else if (order.Order_Type === "Online") {
            orderCounts["Online"] += 1;
        }
    });

    const data = {
        labels: Object.keys(orderCounts),
        datasets: [
            {
                data: Object.values(orderCounts),
                backgroundColor: ["#10B981", "#3B82F6"],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div style={{ width: "300px", height: "350px" }}>
            <h2 className="font-bold my-4">Type of orders</h2>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;