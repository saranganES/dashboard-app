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

const TopItemsChart = ({ orders }) => {
    const itemTotals = {};
    orders.forEach((order) => {
        order.Items.forEach((item) => {
            itemTotals[item.Item_Name] = (itemTotals[item.Item_Name] || 0) + item.Total_Price;
        });
    });

    const sortedItems = Object.entries(itemTotals)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    const itemLabels = sortedItems.map((item) => item[0]);
    const itemDataValues = sortedItems.map((item) => item[1]);
    const colors = ["#3B82F6", "#EF4444", "#F59E0B", "#10B981", "#8B5CF6"];

    const itemData = {
        labels: itemLabels,
        datasets: [
            {
                label: "Top 5 Items",
                data: itemDataValues,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1,
            },
        ],
    };

    const itemOptions = {
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
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ height: "400px" , paddingBottom:"20px" }}>
            <h2 className="font-bold my-4">Top 5 Items</h2>
            <Bar data={itemData} options={itemOptions} />
        </div>
    );
};

export default TopItemsChart;
