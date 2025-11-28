import { Room } from "../types/room";

const BASE_URL = "https://6924c58582b59600d7214c7b.mockapi.io/montreal/api/v1/rooms";

export async function getRooms(): Promise<Room[]> {
    const res = await fetch(BASE_URL, {

        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error("Falha ao carregar os quartos");
    }

    return res.json();
}

export async function getRoomById(id: string): Promise<Room> {
    const res = await fetch(`${BASE_URL}/${id}`, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error("Falha ao carregar detalhes do quarto");
    }

    return res.json();
}