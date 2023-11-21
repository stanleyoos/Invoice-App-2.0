import React from "react"
import Link from "next/link"
import { Button } from "../../../components/ui/button"
import { IoTrashBin, IoAdd } from "react-icons/io5"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function CreateInvoice() {
  return (
    <Link href="/invoices/create">
      <Button variant="secondary">
        <IoAdd />
        Add invoice
      </Button>
    </Link>
  )
}

export function UpdateInvoice({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return <Link href={`/invoices/${id}/edit`}>{children}</Link>
}

export function DeleteInvoice() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <IoTrashBin />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            invoice from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
