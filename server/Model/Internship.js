import mongoose from "mongoose";
const Internshipschema = new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    category: String,
    aboutCompany: String,
    aboutInternship: String,
    whoCanApply: String,
    perks: Array,
    numberOfOpening: String,
    stipend: String,
    startDate: String,
    additionalInfo: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  const Internship=mongoose.model('Internship',Internshipschema);
  export default Internship;