import mongoose from "mongoose";
const JobShcema = new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    Experience: String,
    category: String,
    aboutCompany: String,
    aboutJob: String,
    whoCanApply: String,
    perks: Array,
    AdditionalInfo: String,
    CTC: String,
    StartDate: String,
    createAt: {
      type: Date,
      default: Date.now,
    },
  });
  const Jobs=mongoose.model('Jobs',JobShcema);
  export default Jobs;