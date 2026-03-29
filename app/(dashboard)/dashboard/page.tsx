import { ChartAreaInteractive } from "@/components/dashboard/chart-interactive"
import { ChartPair } from "@/components/dashboard/chart-pair"
import { ChartSession } from "@/components/dashboard/chart-session"
import { SectionCards } from "@/components/dashboard/section-card"

export default function Page() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
      </div>
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-2 px-4 md:grid-cols-3 lg:px-6">
        <ChartPair />
        <ChartSession />
        <ChartPair />
      </div>
    </div>
  )
}
