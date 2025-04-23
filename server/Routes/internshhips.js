import express from 'express';
const router=express.Router();
import Internship from '../Model/internship.js';
// POST
router.post("/", async (req, res) => {
    const Internshipdata = new Internship({
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      category: req.body.category,
      aboutCompany: req.body.aboutCompany,
      aboutInternship: req.body.aboutInternship,
      whoCanApply: req.body.whoCanApply,
      perks: req.body.perks,
      numberOfOpening: req.body.numberOfOpening,
      stipend: req.body.stipend,
      startDate: req.body.startDate,
      additionalInfo: req.body.additionalInfo,
    });
  
    try {
      const data = await Internshipdata.save();
      res.status(201).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create internship" });
    }
  });
  
  // GET all
  router.get("/", async (req, res) => {
    try {
      const data = await Internship.find();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  // GET by ID
  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "ID parameter is required" });
    }
    try {
      const data = await Internship.findById(id);
      if (!data) {
        return res.status(404).json({ error: "Internship not found" });
      }
      res.status(200).json(data);
    } catch (error) {
      console.error("Error retrieving internship:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  export default router;