import spacy from "../assets/spacy.jpg";
import pose_1 from "../assets/pose_1.png";
import stream from "../assets/stream.jpg";
import soccer from "../assets/soccer.jpg";
import fastapi from "../assets/fastapi.png";
import indian from "../assets/indian.jpg";

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
        name:"Indian Food EDA",
		image: indian,
		code: "https://www.kaggle.com/code/gurmolsingh/indian-food-101-analysis",
		github: "https://github.com/gu12934/Kaggle-Data-Analysis-EDA/blob/gu12934-Indian-food/Indian%20Food%20101.ipynb",
		skills: "python, plotly, sns, seaborn",

    },

	{	name: "FastAPI Project" ,
		image: fastapi,
		skills: "Fast API, network, socketing",
		github: "https://github.com/gu12934/API/blob/main/test_api.py",
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
		code: "https://colab.research.google.com/drive/1pvO6jexVTHBl6_4moT_UmH4utyR2fD8j#scrollTo=VJVbpo7nqeVb",
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