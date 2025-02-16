import express from "express";

const app = express();
app.use(express.json());

app.get('/', (req,res)=> {
    res.send("Index")
})

// Method POST to register a new song
app.post('/registersong', (req,res) => {
    const{name, artist, album} = req.body;
    const newSong = {
        name,
        artist,
        album
    }
    res.status(200).json(newSong);
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server running in port: ${port}`)
})