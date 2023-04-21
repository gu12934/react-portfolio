import spacy from "../assets/spacy.jpg";
import pose_1 from "../assets/pose_1.png";

export const ProjectList = [
	{
		name:"NLP Capstone Project",
		image: spacy,
		skills: "NLP, NLTK, streamlit, spacy, praw",
		code:"https://colab.research.google.com/drive/1QRFsdxlKOBt-V_h6_RFYZvrHtb03GsrJ?usp=sharing",
		github:"https://github.com/felicityy-li/Neuro-Journal/blob/main/journal_backend.ipynb",
	},

    {
        name:"Pose Estimation Project",
		image: pose_1,
		skills: "open cv,mediapipe, python",

    },

	{	name: "FastAPI Project" ,
		image: spacy,
		skills: "FastAPI, networking, socketing, client, server",
	},

	{
		name:"Streamlit Plotting",
		image: spacy,
		skills: "streamlit, graphing, visaulization",

	},
	{
		name:"SQL Analysis of Soccer",
		image: spacy,

	},
	{
		name:"CNN project",
		image: spacy,

	},

];

const handleCodeClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };