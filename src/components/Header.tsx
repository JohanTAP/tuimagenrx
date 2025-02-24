"use client"

import { useState } from "react"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import
{
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Calidad", href: "#calidad" },
    { name: "Exámenes", href: "#examenes" },
    { name: "Nuestro Equipo", href: "#equipo" },
    { name: "Sucursales", href: "#sucursales" },
    { name: "Preguntas Frecuentes", href: "#faq" },
    { name: "Contáctenos", href: "#contacto" },
]

export function Header ()
{
    const [ isOpen, setIsOpen ] = useState( false )

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-primary to-primary/65 backdrop-blur-sm shadow-md">
            <div className="flex h-16 items-center justify-between px-4">
                <a href="/" className="flex items-center space-x-2">
                    <img
                        src="/Logo-Transparente.webp"
                        width="150"
                        height="53"
                        alt="Logo"
                        className="w-auto h-auto max-w-[150px] max-h-[53px] filter drop-shadow"
                    />
                </a>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    { navItems.map( ( item ) => (
                        <a
                            key={ item.name }
                            href={ item.href }
                            className="transition-colors hover:text-primary text-foreground/60"
                        >
                            { item.name }
                        </a>
                    ) ) }
                </nav>
                <Sheet open={ isOpen } onOpenChange={ setIsOpen }>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="px-0 text-base hover:bg-indigo-700 focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Abrir Menú</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col space-y-4 mt-4">
                            { navItems.map( ( item ) => (
                                <a
                                    key={ item.name }
                                    href={ item.href }
                                    className="text-lg font-medium transition-colors hover:text-primary"
                                    onClick={ () => setIsOpen( false ) }
                                >
                                    { item.name }
                                </a>
                            ) ) }
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
