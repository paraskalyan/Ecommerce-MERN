import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import AnalyticsCard from './AnalyticsCard'
import axiosInstance from '../lib/axios';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend,
} from 'recharts';
import { ChartSalesRevenue } from './Chart';
import PageLoader from './PageLoader';

const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState({
        users: 0,
        products: 0,
        totalSales: 0,
        totalRevenue: 0,
    });
    const [isLoading, setIsLoading] = useState(true);
    const [dailySalesData, setDailySalesData] = useState([]);

    useEffect(() => {
        const fetchAnalyticsData = async () => {
            try {
                const response = await axiosInstance.get("/analytics");
                setAnalyticsData(response.data.analyticsData);
                setDailySalesData(response.data.dailySalesData);
            } catch (error) {
                console.error("Error fetching analytics data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAnalyticsData();
    }, []);

    if (isLoading) {
        return <PageLoader />;
    }
    return (
        <div className='px-4 lg:px-44  space-y-8'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <AnalyticsCard title='Total Users' value={analyticsData.users} />
                <AnalyticsCard title='Total Products' value={analyticsData.products} />
                <AnalyticsCard title='Total Sales' value={analyticsData.totalSales} />
                <AnalyticsCard title='Total Revenue' value={analyticsData.totalRevenue} />
            </div>
            {/* <div className="w-full h-[300px] rounded-xl bg-white p-4 shadow">
                <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailySalesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div> */}

            <ChartSalesRevenue />


        </div>
    )
}

export default Analytics


