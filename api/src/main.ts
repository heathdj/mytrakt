import {Application,} from '../deps.ts';
import initRouters from './router/index.ts';
import MongoDatabase from './helper/mongodb.ts';


const URL = Deno.env.get("URL") || 'http://localhost';
const PORT = +(Deno.env.get("PORT") || 3001);
const MONGO_URL = Deno.env.get("MONGO_URL") || 'mongodb://127.0.0.1:27017';

const mongoDB = MongoDatabase.getInstance();

const app = new Application();


initRouters(app);

app.addEventListener("listen", () => {
    console.log(`Server listening at ${URL}:${PORT}`)
    
});

await app.listen({port: PORT});