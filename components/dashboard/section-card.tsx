import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DollarSign, TrendingDownIcon, TrendingUp } from "lucide-react"

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <Card className="@container/card justify-center">
        <CardHeader>
          <CardDescription>Total PnL</CardDescription>
          <CardTitle className="text-2xl font-semibold text-emerald-500 tabular-nums @[250px]/card:text-3xl">
            $1,250.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Semua waktu
            <TrendingUp className="size-4" />
          </div>
          {/* <div className="text-muted-foreground">Jangan lupa bersyukur</div> */}
        </CardFooter>
      </Card>
      <Card className="@container/card justify-center">
        <CardHeader>
          <CardDescription>Total PnL</CardDescription>
          <CardTitle className="text-2xl font-semibold text-red-500 tabular-nums @[250px]/card:text-3xl">
            $1,234.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingDownIcon />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Hari ini
            <TrendingDownIcon className="size-4" />
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card justify-center">
        <CardHeader>
          <CardDescription>Total PnL</CardDescription>
          <CardTitle className="text-2xl font-semibold text-red-500 tabular-nums @[250px]/card:text-3xl">
            $1,234.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingDownIcon />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Minggu ini
            <TrendingDownIcon className="size-4" />
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card justify-center">
        <CardHeader>
          <CardDescription>Total PnL</CardDescription>
          <CardTitle className="text-2xl font-semibold text-emerald-500 tabular-nums @[250px]/card:text-3xl">
            $1,250.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Bulan ini
            <TrendingUp className="size-4" />
          </div>
          {/* <div className="text-muted-foreground">Jangan lupa bersyukur</div> */}
        </CardFooter>
      </Card>
      <Card className="@container/card justify-center">
        <CardHeader>
          <CardDescription>Target vs Realisasi</CardDescription>
          <CardTitle className="text-2xl font-semibold text-emerald-500 tabular-nums @[250px]/card:text-3xl">
            $1,250.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Target $1,000
            <TrendingUp className="size-4" />
          </div>
          {/* <div className="text-muted-foreground">Jangan lupa bersyukur</div> */}
        </CardFooter>
      </Card>
      <Card className="@container/card justify-center">
        <CardHeader>
          <CardDescription>Total Trade</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            1500
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Keseluruhan
            <TrendingUp className="size-4" />
          </div>
          {/* <div className="text-muted-foreground">Jangan lupa bersyukur</div> */}
        </CardFooter>
      </Card>
      <Card className="@container/card justify-center">
        <CardHeader>
          <CardDescription>Winrate</CardDescription>
          <CardTitle className="text-2xl font-semibold text-emerald-500 tabular-nums @[250px]/card:text-3xl">
            0%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            dari 500 trade
            <TrendingUp className="size-4" />
          </div>
          {/* <div className="text-muted-foreground">Jangan lupa bersyukur</div> */}
        </CardFooter>
      </Card>
      <Card className="@container/card justify-center">
        <CardHeader>
          <CardDescription>Average RR</CardDescription>
          <CardTitle className="text-2xl font-semibold text-emerald-500 tabular-nums @[250px]/card:text-3xl">
            0%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Risk & Reward
            <TrendingUp className="size-4" />
          </div>
          {/* <div className="text-muted-foreground">Jangan lupa bersyukur</div> */}
        </CardFooter>
      </Card>
      <Card className="@container/card justify-center">
        <CardHeader>
          <CardDescription>Average Win/Loss</CardDescription>
          <CardTitle className="text-2xl font-semibold text-emerald-500 tabular-nums @[250px]/card:text-3xl">
            0%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Risk & Reward
            <TrendingUp className="size-4" />
          </div>
          {/* <div className="text-muted-foreground">Jangan lupa bersyukur</div> */}
        </CardFooter>
      </Card>
    </div>
  )
}
