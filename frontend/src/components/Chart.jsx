"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './ui/card'

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from './ui/chart'

// Your sales & revenue data
const chartData = [
    { date: '2025-06-19', sales: 0, revenue: 0 },
    { date: '2025-06-20', sales: 0, revenue: 0 },
    { date: '2025-06-21', sales: 0, revenue: 0 },
    { date: '2025-06-22', sales: 0, revenue: 0 },
    { date: '2025-06-23', sales: 0, revenue: 0 },
    { date: '2025-06-24', sales: 0, revenue: 0 },
    { date: '2025-06-25', sales: 0, revenue: 0 },
    { date: '2025-06-26', sales: 1, revenue: 4444 },
]

// Chart config for ShadCN styling
const chartConfig = {
    sales: { label: "Sales", color: "var(--chart-1)" },
    revenue: { label: "Revenue", color: "var(--chart-2)" },
};

export function ChartSalesRevenue({ data }) {
    return (
        <Card className=''>
            <CardHeader>
                <CardTitle>Sales & Revenue Chart</CardTitle>
                <CardDescription>
                    Daily sales performance (last 7 days)
                </CardDescription>
            </CardHeader>
            <CardContent className=''>
                <ChartContainer className='h-[350px] w-full' config={chartConfig}>
                    <AreaChart
                        data={data}
                        margin={{ left: 12, right: 12 }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(5)} // Show MM-DD
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" />}
                        />
                        <Area
                            dataKey="sales"
                            type="monotone"
                            fill="var(--chart-1)"
                            fillOpacity={0.3}
                            stroke="var(--chart-1)"
                            stackId="a"
                        />
                        <Area
                            dataKey="revenue"
                            type="monotone"
                            fill="var(--chart-2)"
                            fillOpacity={0.3}
                            stroke="var(--chart-2)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Last day sales spike <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground">
                            June 19 - June 26, 2025
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
