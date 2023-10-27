import mongoose from "mongoose";

const commonModel = new mongoose.Schema({
  header: {
    image: String,
    btnTitle: String,
    btnLink: String,
    warningMessage: String,
  },
  testimonial: {
    btnTitle: String,
    title: String,
    subTitle: String,
    desc: String,
    data: [
      {
        image: String,
        fullName: String,
        review: String,
      },
    ],
  },
  clients: {
    title: String,
    subTitle: String,
    data: [
      {
        image: String,
      },
    ],
  },
  contactDetails: [
    {
      image: String,
      name: String,
      value: String,
    },
  ],
  footerCompany: {
    title: String,
    data: mongoose.Schema.Types.Mixed,
  },
  footerService: {
    title: String,
    data: mongoose.Schema.Types.Mixed,
  },
  footerNavigation: {
    title: String,
    data: mongoose.Schema.Types.Mixed,
  },
  footerCard: {
    title: String,
    value: String,
    btnTitle: String,
  },
  footer: {
    title: String,
    image: String,
    data: [
      {
        iconName: String,
        iconLink: String,
      },
    ],
  },
  quote: {
    btnTitle: String,
    desc: String,
    subTitle: String,
    title: String,
  },
});

export default mongoose.model("commonpage", commonModel);
