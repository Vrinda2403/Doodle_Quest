import dotenv from "dotenv";
import modeRoutes from "./routes/modeRoute.js";
import timeRoutes from "./routes/timeRoute.js";
import app from "./app.js";
import http from "http";
import { Server } from "socket.io";

dotenv.config();

const server = http.createServer(app);

// Create websocket server
export const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// When a parent connects
io.on("connection", (socket) => {
  console.log("Parent connected to live alerts:", socket.id);
});


app.use("/api/mode", modeRoutes);
app.use("/api/time", timeRoutes); //  ADD THIS LINE

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
