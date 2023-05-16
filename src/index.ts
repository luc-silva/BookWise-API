import { app } from "./server";

app.listen(process.env.API_PORT, () => {
    console.log(`API iniciada na porta: ${process.env.API_PORT}`);
});
