import express from 'express';
import Job from '../Model/Jobs.js';
const router = express.Router();

// Route to create a new job listing
router.post("/", async (req, res) => {
  // Create a new job listing using the data sent in the request body
  const jobdata = new Job({
    title: req.body.title,
    company: req.body.company,
    location: req.body.location,
    Experience: req.body.Experience,
    category: req.body.category,
    aboutCompany: req.body.aboutCompany,
    aboutJob: req.body.aboutJob,
    whoCanApply: req.body.whoCanApply,
    perks: req.body.perks,
    AdditionalInfo: req.body.AdditionalInfo,
    CTC: req.body.CTC,
    StartDate: req.body.StartDate,
  });

  // Try saving the job data to the database
  await jobdata.save()
    .then((data) => {
      res.send(data); // Send back the saved job listing if successful
    })
    .catch((error) => {
      console.log(error); // Log any errors that occur during saving
      res.status(500).json({ error: "Failed to create job listing" }); // Send an error response
    });
});

// Route to get all job listings
router.get("/", async (req, res) => {
  try {
    const data = await Job.find(); // Fetch all job listings from the database
    res.json(data).status(200); // Send the job listings as a JSON response
  } catch (error) {
    console.log(error); // Log any errors that occur
    res.status(500).json({ error: "Internal server error" }); // Send an error response if something goes wrong
  }
});

// Route to get a specific job listing by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params; // Get the job ID from the URL parameters
  try {
    const data = await Job.findById(id); // Fetch the job by its ID
    if (!data) {
      res.status(404).json({ error: "Job not found" }); // If no job is found, send a 404 response
    }
    res.json(data).status(200); // Send back the found job data
  } catch (error) {
    console.log(error); // Log any errors that occur
    res.status(500).json({ error: "Internal server error" }); // Send an error response in case of failure
  }
});

// Export the router so it can be used in the main application
export default router;