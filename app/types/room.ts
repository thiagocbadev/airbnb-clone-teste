export interface Room {
    id: string;
    createdAt: string;
    pricePerDay: string;
    photo: string;
    reviewNote: number;
    availableDays: number;
    city: string;
    description: string;
    latitude?: number;
    longitude?: number;
}