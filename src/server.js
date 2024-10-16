import express from "express";
import { router } from "./routes.js";

const PORT = 3333;

const server = express();

server.use(express.json());
server.use(router);
server.use((err, req, res, next) => {
    // Se for uma instância do tipo error
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    };

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});
server.listen(PORT, () => { console.log(`[ok] Servidor online na porta ${PORT}`) })