import Image from "next/image";
import Link from "next/link";
import { Room } from "@/app/types/room";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface RoomCardProps {
    room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
    return (
        <Link href={`/rooms/${room.id}`} className="group block h-full">
            <Card className="h-full overflow-hidden border-none shadow-none hover:shadow-md transition-shadow rounded-xl">
                { }
                <CardHeader className="p-0 relative aspect-square">
                    <Image
                        src={room.photo}
                        alt={`Foto de ${room.city}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                    />
                </CardHeader>

                { }
                <CardContent className="p-3">
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-base truncate pr-2">{room.city}</h3>
                        <div className="flex items-center gap-1 text-sm">
                            <span>★</span>
                            <span>{room.reviewNote}</span>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                        Disponível por {room.availableDays} dias
                    </p>
                </CardContent>

                { }
                <CardFooter className="p-3 pt-0 mt-auto">
                    <div className="flex items-baseline gap-1">
                        <span className="font-bold text-lg">
                            R$ {room.pricePerDay}
                        </span>
                        <span className="text-sm text-muted-foreground">noite</span>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}