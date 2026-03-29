"use client"

import { TrendingDown, TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A pie chart with a label list"

const chartData = [
  { browser: "asia", trade: 275, fill: "var(--color-asia)" },
  { browser: "newyork", trade: 150, fill: "var(--color-newyork)" },
  { browser: "london", trade: 50, fill: "var(--color-london)" },
]

const chartConfig = {
  trade: {
    label: "Visitors",
  },
  asia: {
    label: "Asia",
    color: "var(--violet)",
  },
  newyork: {
    label: "New york",
    color: "var(--rose)",
  },
  london: {
    label: "London",
    color: "var(--blue)",
  },
} satisfies ChartConfig

export function ChartSession() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Session for Trade</CardTitle>
        <CardDescription>January - December 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-62.5 [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="trade">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value) =>
                  chartConfig[value as keyof typeof chartConfig]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending down by 5.2% this month <TrendingDown className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total session for trade in 1 year
        </div>
      </CardFooter>
    </Card>
  )
}
