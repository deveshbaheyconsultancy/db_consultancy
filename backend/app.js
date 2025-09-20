import express from "express";
import cors from "cors";
// Import routes
import contactRoutes from "./routes/contact.routes.js";
import requirementRoutes from "./routes/requirement.routes.js";

const app = express();

// ✅ Allow frontend URL
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Body parser
app.use(express.json());

// Use routes
app.use("/api/contact", contactRoutes);
app.use("/api/requirement", requirementRoutes);

app.listen(8080, () => {
  console.log("🚀 Server running on port 8080");
});
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// // ✅ Load environment variables first
// dotenv.config();

// const app = express();

// // ✅ CORS middleware MUST be first
// app.use(
//   cors({
//     origin: "http://localhost:5173", // your frontend
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );
// // ✅ Body parser middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ✅ Test route
// app.get("/", (req, res) => {
//   res.json({
//     message: "Server is running!",
//     timestamp: new Date().toISOString(),
//     email: process.env.EMAIL_USER ? "Configured" : "Not configured",
//   });
// });

// // ✅ Import and use routes with error handling
// try {
//   const { default: contactRoutes } = await import("./routes/contact.routes.js");
//   app.use("/api/contact", contactRoutes);
// } catch (error) {
//   console.error("❌ Failed to load contact routes:", error.message);
// }

// try {
//   const { default: requirementRoutes } = await import(
//     "./routes/requirement.routes.js"
//   );
//   app.use("/api/requirement", requirementRoutes);
// } catch (error) {
//   console.error("❌ Failed to load requirement routes:", error.message);
// }

// // ✅ Error handling middleware
// app.use((err, req, res, next) => {
//   console.error("💥 Express error:", err.stack);
//   res.status(500).json({
//     success: false,
//     error: true,
//     message: "Something went wrong!",
//   });
// });

// // ✅ Handle 404
// app.use((req, res) => {
//   console.log("❌ 404 - Route not found:", req.method, req.url);
//   res.status(404).json({
//     success: false,
//     error: true,
//     message: "Route not found",
//   });
// });

// const PORT = process.env.PORT || 8080;

// // ✅ Handle uncaught exceptions
// process.on("uncaughtException", (err) => {
//   console.log("💥 Uncaught Exception:", err.message);
//   console.error(err.stack);
//   console.log("Shutting down...");
//   process.exit(1);
// });

// // ✅ Handle unhandled promise rejections
// process.on("unhandledRejection", (err) => {
//   console.log("💥 Unhandled Rejection:", err.message);
//   console.error(err);
//   console.log("Shutting down...");
//   server.close(() => {
//     process.exit(1);
//   });
// });

// // ✅ Graceful shutdown
// process.on("SIGTERM", () => {
//   console.log("👋 SIGTERM received");
//   server.close(() => {
//     console.log("✅ Server closed");
//     process.exit(0);
//   });
// });

// process.on("SIGINT", () => {
//   console.log("👋 SIGINT received (Ctrl+C)");
//   server.close(() => {
//     console.log("✅ Server closed");
//     process.exit(0);
//   });
// });

// const server = app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`📧 Email configured for: ${process.env.EMAIL_USER}`);
//   console.log(`🌐 Test at: http://localhost:${PORT}`);
//   console.log(`⏰ Server started at: ${new Date().toLocaleTimeString()}`);
// });

// server.on("error", (err) => {
//   console.error("🚨 Server error:", err.message);
//   if (err.code === "EADDRINUSE") {
//     console.error(`❌ Port ${PORT} is already in use`);
//     console.log("💡 Try: lsof -ti:8080 | xargs kill -9");
//   }
// });

// // ✅ Keep alive heartbeat
// setInterval(() => {
//   console.log(`💗 Server heartbeat - ${new Date().toLocaleTimeString()}`);
// }, 30000); // Every 30 seconds
