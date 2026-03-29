import { Button } from "@/components/ui/button"
import { DataTable } from "./data-table"
import { columns } from "./columns"
async function getJournalData(): Promise<Journal[]> {
  return [
    {
      id: 1,
      pair_id: "BTCUSD",
      entry: 60000,
      exit: 70000,
      lot: 0.01,
      total_profit_loss: "5$",
      type: "Long",
      type_exit: "TP",
      profit_loss: "Profit",
      rr: "1/3",
      sl_tp: "60000/70000",
      tanggal: "12 November 2025 15:50 ",
      reason_entry: "RSI(8) 30",
    },
    {
      id: 2,
      pair_id: "XAUUSD",
      entry: 3000,
      exit: 4000,
      lot: 0.01,
      total_profit_loss: "5$",
      type: "Long",
      type_exit: "SL+",
      profit_loss: "Profit",
      rr: "1/3",
      sl_tp: "3000/4000",
      tanggal: "11 November 2025 15:50 ",
      reason_entry: "Feeling",
    },
    {
      id: 3,
      pair_id: "XAUUSD",
      entry: 4500,
      exit: 4700,
      lot: 0.01,
      total_profit_loss: "-3$",
      type: "Short",
      type_exit: "SL",
      profit_loss: "Loss",
      rr: "1/3",
      sl_tp: "4700/4000",
      tanggal: "13 November 2025 15:50 ",
      reason_entry: "Feeling",
    },
  ]
}

export default async function Page() {
  const data = await getJournalData()

  console.log(data)

  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="mt-5 flex">
        <Button>Tambah Trade</Button>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
// Author : M. Hamdan Yusuf 😎
