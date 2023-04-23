import spacy from "../assets/spacy.jpg";
import pose_1 from "../assets/pose_1.png";
import stream from "../assets/stream.jpg";
import soccer from "../assets/soccer.jpg"

export const ProjectList = [
	{
		name:"NLP Capstone Project",
		image: spacy,
		skills: "NLP, NLTK, streamlit, spacy, praw",
		code:"https://colab.research.google.com/drive/1QRFsdxlKOBt-V_h6_RFYZvrHtb03GsrJ?usp=sharing",
		github:"https://github.com/felicityy-li/Neuro-Journal/blob/main/journal_backend.ipynb",
		youtube: "https://www.youtube.com/watch?v=0T16w4Ubmqk&t=30s",
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
		image: stream,
		skills: "streamlit, graphing, visualization",
		youtube: "https://www.youtube.com/watch?v=zu4FTDUtjKc",
		github:"https://github.com/gu12934/Streamlit/blob/main/plotting/plotting_dashboard.py",

	},
	{
		name:"SQL Analysis of Soccer",
		image: soccer,
		skills: "streamlit, graphing, SQL queries",
		github: "https://github.com/gu12934/Streamlit/blob/gu12934-sql_streamlit/sql_playground.py",
		youtube: "https://www.youtube.com/watch?v=OGxL7-mkEpY",

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