import Image from "next/image";
import Link from "next/link";
import { getRoomById } from "@/app/services/api";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface RoomPageProps {
    params: Promise<{ id: string }>;
}

export default async function RoomDetails({ params }: RoomPageProps) {

    const { id } = await params;


    const room = await getRoomById(id);

    return (
        <main className="container mx-auto px-4 py-8">
            { }
            <Link href="/" className="inline-block mb-6">
                <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary">
                    ← Voltar para listagem
                </Button>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                { }
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
                    <Image
                        src={room.photo}
                        alt={room.city}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                { }
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{room.city}</h1>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <span className="flex items-center gap-1">
                                ★ <span className="text-black font-medium">{room.reviewNote}</span>
                            </span>
                            <span>•</span>
                            <span>{room.availableDays} dias disponíveis</span>
                        </div>
                    </div>

                    <div className="border-t border-b py-6">
                        <h2 className="font-semibold mb-2">Sobre este lugar</h2>
                        <p className="text-gray-600 leading-relaxed">
                            {room.description}
                        </p>
                    </div>

                    { }
                    <Card className="p-6 shadow-lg border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <span className="text-2xl font-bold">R$ {room.pricePerDay}</span>
                                <span className="text-sm text-gray-500"> / noite</span>
                            </div>
                        </div>
                        <Button className="w-full text-lg py-6 font-bold">
                            Reservar
                        </Button>
                    </Card>

                    { }
                    {room.latitude && room.longitude && (
                        <div className="mt-2">
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${room.latitude},${room.longitude}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline flex items-center gap-2 font-medium"
                            >
                                📍 Ver localização no mapa
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}