import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Get all contacts endpoint
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({ contacts });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get all newsletter subscriptions endpoint
  app.get("/api/newsletters", async (req, res) => {
    try {
      const newsletters = await storage.getNewsletters();
      res.json({ newsletters });
    } catch (error) {
      console.error("Error fetching newsletters:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      const contact = await storage.createContact(validatedData);
      
      console.log("Contact form submission saved to database:", {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        service: contact.service,
        timestamp: contact.createdAt
      });

      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        contactId: contact.id
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        error: error instanceof Error ? error.message : "Invalid request data"
      });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      const newsletter = await storage.createNewsletter(validatedData);
      
      console.log("Newsletter subscription saved to database:", {
        id: newsletter.id,
        email: newsletter.email,
        timestamp: newsletter.subscribedAt
      });

      res.json({ 
        success: true, 
        message: "Successfully subscribed to newsletter",
        subscriptionId: newsletter.id
      });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      if (error instanceof Error && error.message.includes("unique")) {
        res.status(409).json({ 
          error: "Email already subscribed to newsletter" 
        });
      } else {
        res.status(400).json({ 
          error: error instanceof Error ? error.message : "Invalid request data"
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
