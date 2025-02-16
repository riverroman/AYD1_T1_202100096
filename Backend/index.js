import express from "express";

const app = express();
app.use(express.json());

app.get('/', (req,res)=> {
    res.send("Index")
})

// Method POST to register a new song
app.post('/registersong', (req,res) => {
    const{name, artist, genre} = req.body;
    const newSong = {
        name,
        artist,
        genre
    }
    res.status(201).json(newSong);
})

// Method GET to view information
app.get('/viewinformation', (req,res) => {
    const data = {
        name : "River Roman",
        carne : "202100096"
    }
    res.status(200).json(data);
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server running in port: ${port}`)
})