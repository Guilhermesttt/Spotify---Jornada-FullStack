import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://Guilherme:Gui12345@spotify.nc3zl.mongodb.net/?retryWrites=true&w=majority&appName=Spotify";

const client = new MongoClient(URI);

export const db = client.db("Spotify-Aula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
