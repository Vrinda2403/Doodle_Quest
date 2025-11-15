import dotenv from "dotenv";
import modeRoutes from "./routes/modeRoute.js";
import timeRoutes from "./routes/timeRoute.js";
import app from "./app.js";

dotenv.config();

app.use("/api/mode", modeRoutes);
app.use("/api/time", timeRoutes); // 👈 ADD THIS LINE

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
