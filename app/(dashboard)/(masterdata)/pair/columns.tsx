"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

export const columns: ColumnDef<Pair>[] = [
  { accessorKey: "pair", header: "Pair" },
  { accessorKey: "trade", header: "Trade Count" },
  {
    accessorKey: "profit",
    header: "Profit",
    cell: ({ row }) => (
      <div className="font-medium text-emerald-500">
        {row.getValue("profit")}
      </div>
    ),
  },
  {
    accessorKey: "loss",
    header: "Loss",
    cell: ({ row }) => (
      <div className="font-medium text-red-500">{row.getValue("loss")}</div>
    ),
  },
  { accessorKey: "winrate", header: "Winrate" },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const trade = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Detail</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
