import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export function registerRoutes(app: Express): Server {
  // Example: a simple health check route
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // Example: placeholder CRUD route using storage (adjust to your storage API)
  app.post("/api/users", async (req, res) => {
    try {
      // const user = req.body; // ensure you have body-parser or express.json() middleware
      // const created = await storage.insertUser(user);
      // res.status(201).json(created);
      res.status(501).json({ message: "Not implemented" });
    } catch (err) {
      res.status(500).json({ error: "Internal error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}