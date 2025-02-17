"use client"

import { useState } from "react"
import {
  ChevronDown,
  Menu,
  Search,
  ShoppingCart,
  Package,
  BarChart3,
  Settings,
  LayoutDashboard,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Ventas - Clientes",
    icon: Users,
    items: ["Comprobantes", "Maestro Clientes", "Estado de Cuenta Cliente", "Informes Clientes"],
  },
  {
    title: "Compras - Proveedores",
    icon: ShoppingCart,
    items: ["Órdenes de Compra", "Proveedores", "Pagos"],
  },
  {
    title: "Inventario - Artículos",
    icon: Package,
    items: ["Stock", "Movimientos", "Categorías"],
  },
  {
    title: "Contabilidad - Finanzas",
    icon: BarChart3,
    items: ["Libro Mayor", "Balance", "Informes"],
  },
  {
    title: "Parámetros",
    icon: Settings,
    items: ["Configuración", "Usuarios", "Permisos"],
  },
  {
    title: "Gestión",
    icon: LayoutDashboard,
    items: ["Dashboard", "Reportes", "KPIs"],
  },
]

export function Dashboard() {
  const [selectedCompany, setSelectedCompany] = useState("MAESTRANZA ZUÑIGA LTDA")
  const [activeSection, setActiveSection] = useState("Ventas - Clientes")

  // Handle section click to set active section
  const handleSectionClick = (sectionTitle: string) => {
    setActiveSection(sectionTitle)
  }

  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <Sidebar className="border-r ">
          <SidebarHeader className="border-b p-0 ">
            <div className="px-6 py-3 text-lg font-semibold text-blue-600 text-center">OneERP</div>
          </SidebarHeader>
          <div className=" py-3 border-b ">
            <Select value={selectedCompany} onValueChange={setSelectedCompany}>
              <SelectTrigger className="w-full">
                <SelectValue>{selectedCompany}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="MAESTRANZA ZUÑIGA LTDA">MAESTRANZA ZUÑIGA LTDA</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="px-4 py-2 border-b">
            <div className="text-sm font-semibold text-gray-500">MENU</div>
          </div>
          <SidebarContent className="overflow-auto custom-scrollbar">
            <div className="space-y-1 p-2">
              {menuItems.map((section) => (
                <Collapsible key={section.title}>
                  <CollapsibleTrigger
                    className={`flex w-full items-center justify-between rounded-md px-4 py-2 text-sm hover:bg-gray-100 relative ${activeSection === section.title ? 'bg-emerald-100' : ''
                      }`}
                    onClick={() => handleSectionClick(section.title)} // Set active section on click
                  >
                    <div className="flex items-center gap-3">
                      <section.icon className="h-4 w-4" />
                      <span>{section.title}</span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                    {activeSection === section.title && (
                      <div className="absolute left-0 top-0 h-full w-1 bg-emerald-500" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-11 pr-2">
                    {section.items.map((item) => (
                      <Link key={item} href="#" className="block rounded-md px-4 py-2 text-sm hover:bg-gray-100">
                        {item}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </SidebarContent>
        </Sidebar>
        <div className="flex flex-col mx-0">
          <header className="flex h-14 items-center gap-3 bg-blue-600 px-6 py-0 justify-between lg:py-2">
            {/* Left Section: Selectors and Search */}
            <div className="flex-1 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Select>
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tipo1">Tipo 1</SelectItem>
                    <SelectItem value="tipo2">Tipo 2</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue placeholder="Operación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="op1">Operación 1</SelectItem>
                    <SelectItem value="op2">Operación 2</SelectItem>
                  </SelectContent>
                </Select>
                {/* Existing Search for "Número a Buscar" */}
                <div className="relative flex-1 w-fit">
                  <Input placeholder="Número a buscar" className="bg-white" />
                </div>
                {/* New Search Bar */}
                <div className="relative flex-1 w-10">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground bg-slate-50" />
                  <Input placeholder="" className="pl-8 bg-blue-600 w-auto" />
                </div>
              </div>
            </div>

            {/* Right Section: Profile */}
            <div className="flex items-center gap-4">
              {/* Profile Picture */}
              <Image
                src="/image.png"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              {/* Profile Name */}
              <span className="text-white font-semibold">Oscar Garin</span>

              {/* Dropdown Menu for Profile Details */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <ChevronDown className="h-5 w-5 text-white" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <span className="text-gray-800">Username: oscargarin</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="text-gray-800">Email: oscar@example.com</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="flex-1 p-6 bg-white">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md max-h-[80vh] flex flex-col">
              <h1 className="text-xl font-normal text-gray-600 mb-4">Documentos</h1>
              {/* Horizontal Line Below the Title */}
              <div className="border-b border-gray-300 mb-4"></div>

              {/* Content Section */}
              <div className="flex-1 overflow-auto">
                {/* Your document content goes here */}
              </div>
            </div>
          </main>
          <footer className="text-center py-4 bg-gray-100 text-gray-500">
            <p className="text-sm">© 2024 xDMS, V.0</p>
          </footer>

        </div>
      </div>
    </SidebarProvider>
  )
}
