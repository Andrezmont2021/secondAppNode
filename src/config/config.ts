import dotenv from "dotenv";
dotenv.config();

export const config = {
    profile: process.env.profile || 'dev',
    port: process.env.port || '3000',
    dbHost: process.env.HOST,
    dbName: process.env.DATABASE,
    dbUser: process.env.USER,
    dbPassword: process.env.PASSWORD,
    dbPort: process.env.DB_PORT
}