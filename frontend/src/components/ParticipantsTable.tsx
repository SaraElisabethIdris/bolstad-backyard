
import { useState } from 'react'
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table"

import { Participant } from "../../types.ts";
import { useAuth } from "./AuthProvider.tsx";
import { Button, Table, TableBody, TableHead, TableRow, TableCell } from "@mui/material";

interface ParticipantsTableProps {
    participants: Participant[];
    onDelete?: (id: number) => void;
}

export function ParticipantsTable({ participants, onDelete }: ParticipantsTableProps) {
    const [sorting, setSorting] = useState<SortingState>([])
    const { user } = useAuth()

    const columns: ColumnDef<Participant>[] = [
        {
            accessorKey: "startnumber",
            header: "Startnummer",
        },
        {
            accessorKey: "firstName",
            header: "First Name",
        },
        {
            accessorKey: "lastName",
            header: "Last Name",
        },
        ...(user?.role === 'admin' ? [
            {
                accessorKey: "email",
                header: "Email",
            },
            {
                accessorKey: "phone",
                header: "Phone",
            },
            {
                id: "actions",
                cell: ({ row }: { row: any }) => (
                    <Button variant="contained" color="error" onClick={() => onDelete?.(row.original.id)}>
                        Delete
                    </Button>
                ),
            },
        ] : []),
    ]

    const table = useReactTable({
        data: participants,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting,
        },
    })

    return (
        <div className="rounded-md border">
            <Table>
                <TableHead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableCell key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}