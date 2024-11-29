export interface RoomHost {
    name: string;
    image: string;
    email: string;
  }
  
  export interface Room {
    _id: string;
    location: string;
    category: string;
    title: string;
    price: number;
    to: string;
    from: string;
    guests: number;
    bedrooms: number;
    bathrooms: number;
    host: RoomHost;
    description: string;
    image: string;
  }