import express from 'express';
const router=express.Router();
const adminuser = "Saumyajit";
const adminPassword = "XYZabc@1254";

router.post("/adminlogin", (req, res) => {
  const { username, password } = req.body;
  console.log("Received credentials:", { username, password }); // Log credentials to verify

 

  if (username === adminuser &&  password === adminPassword) {
    res.send("Admin is here");
  } else {
    res.status(401).send("Unauthorized");
  }
});
export default router;
