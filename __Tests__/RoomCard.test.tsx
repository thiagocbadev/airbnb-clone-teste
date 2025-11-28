import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RoomCard } from "@/components/RoomCard";
import { Room } from "@/app/types/room";

const mockRoom: Room = {
    id: "1",
    city: "Cidade Teste",
    pricePerDay: "500",
    photo: "https://picsum.photos/200",
    reviewNote: 9,
    availableDays: 5,
    description: "Descrição teste",
    createdAt: "2025-01-01"
};

describe("RoomCard Component", () => {
    it("", () => {

        render(<RoomCard room={mockRoom} />);


        const cityElement = screen.getByText("Cidade Teste");
        expect(cityElement).toBeInTheDocument();


        expect(screen.getByText(/500/)).toBeInTheDocument();
        expect(screen.getByText(/noite/i)).toBeInTheDocument();


        const image = screen.getByAltText("Foto de Cidade Teste");
        expect(image).toBeInTheDocument();
    });
});