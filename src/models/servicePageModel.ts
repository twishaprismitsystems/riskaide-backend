import mongoose from "mongoose";

const servicePageModel = new mongoose.Schema({
  title: String,
  desc: String,
  header: {
    title: String,
    desc: String,
  },
  lifeInsurance: {
    title: String,
    data: [
      {
        image: String,
        title: String,
        desc: String,
      },
    ],
  },
  healthInsurance: {
    title: String,
    data: [
      {
        image: String,
        title: String,
        desc: String,
      },
    ],
  },
  travelInsurance: {
    title: String,
    data: [
      {
        image: String,
        title: String,
        desc: String,
      },
    ],
  },
  motorInsurance: {
    title: String,
    data: [
      {
        image: String,
        title: String,
        desc: String,
      },
    ],
  },
  generalInsurance: {
    title: String,
    data: [
      {
        image: String,
        title: String,
        desc: String,
      },
    ],
  },
});

export default mongoose.model("servicepage", servicePageModel);
