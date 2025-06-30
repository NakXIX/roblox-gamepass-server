import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

// Este es el Universe ID correcto
const PLACE_ID = "8036641581";

app.get('/gamepasses', async (req, res) => {
    try {
        const url = `https://catalog.roblox.com/v1/search/items?category=11&creatorTargetId=${PLACE_ID}&limit=30`;
        const response = await fetch(url);
        const data = await response.json();

        res.json(data.data || []);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

