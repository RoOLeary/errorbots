"use client"

import { useState } from "react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation"
import { Bot, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "All ErrorBots", href: "/all-errorbots" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export const Navbar =() => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-background shadow-sm">
      <div className="w-full mx-auto px-8 max-sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold flex gap-1 items-center text-primary logo text-red-500 hover:text-green-500 transition-all duration-150 ease-in-out">
                <Bot size={28} className="pb-1" /><span>ERR0RB0TS</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-150 ${
                    pathname === item.href
                      ? "border-primary text-primary text-red-500 border-red-500"
                      : "border-transparent text-muted-foreground hover:border-gray-300 hover:text-red-500"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center gap-2">
            <Button className="hover:bg-red-500">Sign in</Button>
            <Button className="hover:bg-red-500">Register</Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  pathname === item.href
                    ? "bg-primary-foreground border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:bg-gray-50 hover:border-gray-300 hover:text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="mt-3 space-y-1">
              <Button className="w-full justify-start" onClick={() => setIsOpen(false)}>
                LOG IN
              </Button>
              <Button className="w-full justify-start" onClick={() => setIsOpen(false)}>
                REGISTER
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar; 