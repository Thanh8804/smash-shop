import app from "./server/server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"


async function main() {
    dotenv.config();
    const client = new mongodb.MongoClient(process.env.MONGO_URI);
    const port = process.env.PORT || 8000;
    
    try {
        await client.connect();
        app.listen(port, '0.0.0.0',() => {
            console.info(`Server running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    };

}
main().catch(console.error);