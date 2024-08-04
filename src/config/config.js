import "dotenv/config";

export const PORT = process.env.PORT ?? 3000;
export const ORIGIN = process.env.ORIGIN ?? "http://localhost:5173";
export const MONGODB_KEY = process.env.MONGODB_KEY;
export const SECRET_KEY = process.env.SECRET_KEY;
