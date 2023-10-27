import mongoose from "mongoose";

const homePageModel = new mongoose.Schema({
  heroSection: {
    heroBtnTitle: String,
    heroImage: String,
    heroTitle: String,
  },
  insurance: {
    title: String,
    description: String,
    data: [
      {
        title: String,
        normalImage: String,
        hoverImage: String,
        description: String,
      },
    ],
  },
  aboutCompany: {
    title: String,
    subTitle: String,
    missionTitle: String,
    missionDesc: String,
    missionSubDesc: String,
    missionDetails: [String],
    btnTitle: String,
    image: String,
    subImage: String,
  },
  service: {
    title: String,
    subTitle: String,
    desc: String,
    data: [
      {
        image: String,
        title: String,
        desc: String,
      },
    ],
    btnTitle: String,
  },
  blogs: {
    title: String,
    subTitle: String,
    desc: String,
    data: [
      {
        img: String,
        title: String
      },
    ],
    btnTitle: String,
  },
  quote: {
    title: String,
    subTitle: String,
    desc: String,
    btnTitle: String,
  },
});

export default mongoose.model("homepage", homePageModel);
