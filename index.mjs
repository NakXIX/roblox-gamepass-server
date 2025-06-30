import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

const PLACE_ID = "8036641581";

app.get('/gamepasses', async (req, res) => {
  try {
    const url = `https://games.roblox.com/v1/games/${PLACE_ID}/game-passes`;
    const response = await fetch(url);
    const text = await response.text(); // obtenemos texto aunque haya error

    if (!response.ok) {
      console.error("Error de Roblox:", text);
      return res.status(500).json({ error: 'Error al obtener game passes', raw: text });
    }

    const data = JSON.parse(text);
    res.json(data.data);
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor', details: error.message });
  }
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

