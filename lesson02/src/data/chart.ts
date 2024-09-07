import { ChartConfig } from "../components/ui/chart"
import { Monitor, Phone } from "lucide-react"

export const chartConfig = {
    desktop: {
        label: "Desktop",
        icon: Monitor,
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        icon: Phone,
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

