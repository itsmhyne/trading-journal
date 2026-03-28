"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Pair>[] = [
  { accessorKey: "pair", header: "Pair" },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const trade = row.original

      return (
        <div className="flex gap-2">
          <Button
            className="hover:cursor-pointer"
            size="sm"
            onClick={() => console.log("Edit", trade.id)}
          >
            Edit
          </Button>

          <Button
            className="hover:cursor-pointer"
            size="sm"
            variant="destructive"
            onClick={() => console.log("Delete", trade.id)}
          >
            Delete
          </Button>
        </div>
      )
    },
  },
]
