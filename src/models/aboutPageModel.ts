import mongoose from "mongoose";

const aboutPageModel = new mongoose.Schema({
  header: {
    title: String,
    desc: String,
  },
  aboutAuthor: {
    title: String,
    desc: String,
    authorImage: String,
    desc1: String,
    desc2: String,
    btnTitle: String,
  },
  whyChooseUs: {
    title: String,
    subTitle: String,
    data: [
      {
        title: String,
        desc: String,
        image: String,
      },
    ],
  },
  progressInfo: [
    {
      key: String,
      value: Number,
      image: String,
    },
  ],
  ourTeam: {
    title: String,
    subTitle: String,
    data: [{ image: String, fullName: String, designation: String }],
  },
  achievements: {
    title: String,
    desc: String,
    note: String,
    data: [
      {
        title: String,
        desc: String,
      },
    ],
  },
});

export default mongoose.model("aboutpage", aboutPageModel);
