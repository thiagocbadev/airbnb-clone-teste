import Link from "next/link";
import { Search, Globe, Menu, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="border-b bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                { }
                <Link href="/" className="flex items-center gap-1">
                    <span className="text-primary text-2xl font-bold tracking-tighter">
                        airbnb
                    </span>
                </Link>

                { }
                <div className="hidden md:flex items-center border rounded-full py-2.5 px-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer gap-4">
                    <div className="text-sm font-semibold pl-2">Qualquer lugar</div>
                    <div className="border-l h-6 mx-2"></div>
                    <div className="text-sm font-semibold">Qualquer semana</div>
                    <div className="border-l h-6 mx-2"></div>
                    <div className="text-sm text-muted-foreground pr-2">Hóspedes</div>
                    <div className="bg-primary p-2 rounded-full text-white">
                        <Search size={14} strokeWidth={3} />
                    </div>
                </div>

                { }
                <div className="flex items-center gap-2">
                    <Button variant="ghost" className="rounded-full font-semibold text-sm">
                        Anuncie seu espaço
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Globe size={18} />
                    </Button>

                    <div className="flex items-center gap-2 border rounded-full p-1 pl-3 hover:shadow-md transition-shadow cursor-pointer ml-1">
                        <Menu size={18} />
                        <UserCircle size={30} className="text-gray-500 fill-gray-500" />
                    </div>
                </div>
            </div>
        </header>
    );
}