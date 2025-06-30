import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

const PLACE_ID = "8036641581";

app.get('/gamepasses', async (req, res) => {
    try {
        const url = `https://games.roblox.com/v1/games/${PLACE_ID}/game-passes`;
        const response = await fetch(url);
        if (!response.ok) {
            return res.status(500).json({ error: 'Error al obtener game passes' });
        }
        const data = await response.json();
        res.json(data.data);
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

