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
import { Edit, MoreHorizontal, TrashIcon } from "lucide-react"

export const columns: ColumnDef<Journal>[] = [
  { accessorKey: "tanggal", header: "Tanggal" },
  { accessorKey: "pair_id", header: "Pair" },
  { accessorKey: "type", header: "Type" },
  { accessorKey: "entry", header: "Entry" },
  { accessorKey: "exit", header: "Exit" },
  { accessorKey: "lot", header: "Lot" },
  { accessorKey: "type_exit", header: "Type Exit" },
  { accessorKey: "sl_tp", header: "SL/TP" },
  { accessorKey: "rr", header: "RR" },
  { accessorKey: "total_profit_loss", header: "Total" },
  { accessorKey: "reason_entry", header: "Reason" },
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
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
