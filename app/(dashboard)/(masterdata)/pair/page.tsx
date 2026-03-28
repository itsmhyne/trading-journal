import { Button } from "@/components/ui/button"
import { DataTable } from "./data-table"
import { columns } from "./columns"

async function getData(): Promise<Pair[]> {
  return [
    {
      id: "1",
      pair: "XAUUSD",
      created_at: "02 November 2025 04:11 ",
      updated_at: "02 November 2025 04:11 ",
    },
    {
      id: "2",
      pair: "BTCUSD",
      created_at: "02 November 2025 04:11 ",
      updated_at: "02 November 2025 04:11 ",
    },
  ]
}

export default async function Page() {
  const data = await getData()

  console.log(data)

  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="mt-5 flex">
        <Button>Tambah Pair</Button>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
// Author : M. Hamdan Yusuf 😎
