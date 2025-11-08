import dotenv from "dotenv";
import modeRoutes from "./routes/modeRoute.js";
app.use("/api/mode", modeRoutes);

dotenv.config();

const PORT = 3000;
import app from "./app.js";

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));