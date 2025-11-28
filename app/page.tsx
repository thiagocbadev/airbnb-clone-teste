import { getRooms } from "./services/api";
import { RoomCard } from "@/components/RoomCard";

export default async function Home() {
    const rooms = await getRooms();

    return (
        <main className="container mx-auto px-4 pt-6 pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">
                {rooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>
        </main>
    );
}