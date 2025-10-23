import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;
import app from "./app.js";

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));