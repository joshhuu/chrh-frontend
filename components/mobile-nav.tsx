"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">Menu</span>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="mt-8 flex flex-col gap-4">
          <Link href="/" className="text-lg font-medium" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="#about" className="text-lg font-medium text-muted-foreground" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="#watch" className="text-lg font-medium text-muted-foreground" onClick={() => setOpen(false)}>
            Watch
          </Link>
          <Link href="#prayer" className="text-lg font-medium text-muted-foreground" onClick={() => setOpen(false)}>
            Prayer Requests
          </Link>
          <Link href="#donate" className="text-lg font-medium text-muted-foreground" onClick={() => setOpen(false)}>
            Donate
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
