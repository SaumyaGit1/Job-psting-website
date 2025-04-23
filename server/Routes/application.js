import express from 'express';
const router=express.Router();
import application from "../Model/Application.js"; 
// Route to handle creating a new application
router.post("/", async (req, res) => {
    // Create a new application record based on the data sent in the request body
    const applicationipdata = new application({
      company: req.body.company,
      category: req.body.category,
      coverLetter: req.body.coverLetter,
      user: req.body.user,
      Application: req.body.Application,
      body: req.body.body,
    });
  
    // Try saving the application to the database
    await applicationipdata
      .save()
      .then((data) => {
        res.send(data); // Send back the saved application data if successful
      })
      .catch((error) => {
        console.log(error); // Log any error that happens during save operation
      });
  });
// Route to handle getting all applications
router.get("/", async (req, res) => {
    try {
      const data = await application.find(); // Fetch all applications from the database
      res.json(data).status(200); // Send back the applications as a JSON response with a 200 OK status
    } catch (error) {
      console.log(error); // Log any errors that occur
      res.status(404).json({ error: "internal server error" }); // Send an error response if something goes wrong
    }
  });
// Route to get a specific application by its ID
router.get("/:id", async (req, res) => {
    const { id } = req.params; // Get the application ID from the URL parameters
    try {
      const data = await application.findById(id); // Find the application by ID in the database
      if (!data) {
        res.status(404).json({ error: "application not found" }); // If no application is found, send a 404 error
      }
      res.json(data).status(200); // Send back the found application data
    } catch (error) {
      console.log(error); // Log any errors that occur
      res.status(404).json({ error: "internal server error" }); // Send an error response if something goes wrong
    }
  }); 
// Route to update the status of an application (accepted or rejected)
router.put("/:id", async (req, res) => {
    const { id } = req.params; // Get the application ID from the URL parameters
    const { action } = req.body; // Get the action (accepted or rejected) from the request body
    let status;
  
    // Determine the status based on the action provided in the request
    if (action === "accepted") {
      status = "accepted";
    } else if (action === "rejected") {
      status = "rejected";
    } else {
      res.status(404).json({ error: "Invalid action" }); // If the action is neither accepted nor rejected, return an error
      return;
    }
  
    try {
      // Find the application by ID and update its status field
      const updateapplication = await application.findByIdAndUpdate(
        id,
        { $set: { status } },
        { new: true } // Ensure the updated document is returned
      );
  
      if (!updateapplication) {
        res.status(404).json({ error: "Not able to update the application" }); // If update fails, send an error
        return;
      }
  
      // Return the updated application with a success message
      res.status(200).json({ success: true, data: updateapplication });
    } catch (error) {
      res.status(500).json({ error: "internal server error" }); // Send an error response in case of failure
    }
  });
  export default router; // Export the router to be used in the main application
