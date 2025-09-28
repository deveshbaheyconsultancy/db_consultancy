import express from "express";
import cors from "cors";
// Import routes
import contactRoutes from "./routes/contact.routes.js";
import requirementRoutes from "./routes/requirement.routes.js";

const app = express();

// ✅ Allow frontend URL
app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: "https://baheyconsultancy.in",
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
