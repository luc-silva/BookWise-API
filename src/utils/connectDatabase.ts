import mongoose from "mongoose";

export function connectDb() {
    mongoose.connect(process.env.MONGODB_URI);

    mongoose.connection.on("error", () => {
        console.log("Conexão mal sucedida.");
    });
    mongoose.connection.on("connected", () => {
        console.log("Banco de dados MongoDB conectado.");
    });
}
