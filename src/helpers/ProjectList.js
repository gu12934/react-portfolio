import spacy from "../assets/spacy.jpg";
import pose_1 from "../assets/pose_1.png";
import stream from "../assets/stream.jpg";
import soccer from "../assets/soccer.jpg";
import fastapi from "../assets/fastapi.png";
import indian from "../assets/indian.jpg";
import reddit_nba from "../assets/reddit_nba.png";

export const ProjectList = [
	{
		name:"Dashboard on Sports Data",
		image: reddit_nba,
		description: "A project that uses reddit extraction and collects top posts, can be analyzed with spacy",
		skills: "NLP, NLTK, streamlit, spacy, praw",
		code:"https://colab.research.google.com/drive/1QRFsdxlKOBt-V_h6_RFYZvrHtb03GsrJ?usp=sharing",
		github:"https://github.com/gu12934/Streamlit/tree/sports_analytics/sports_analytics_reddit",
		youtube: "https://www.youtube.com/watch?v=VBRidunmqtU",
	},

    {
        name:"Indian Food EDA",
		image: indian,
		description: "Data storytelling project that outlines the EDA process for Indian food",
		code: "https://www.kaggle.com/code/gurmolsingh/indian-food-101-analysis",
		github: "https://github.com/gu12934/Kaggle-Data-Analysis-EDA/blob/gu12934-Indian-food/Indian%20Food%20101.ipynb",
		skills: "python, plotly, sns, seaborn",

    },

	{	name: "FastAPI Project" ,
		image: fastapi,
		description: "A project that showcases use of FastAPI and can be linked to other projects",
		skills: "Fast API, network, socketing",
		github: "https://github.com/gu12934/API/blob/main/test_api.py",
		skills: "FastAPI, networking, socketing, client, server",
	},

	{
		name:"Streamlit Plotting",
		image: stream,
		description: "A project that can plot different graphs based on what csv file is uploaded",
		skills: "streamlit, graphing, visualization",
		youtube: "https://www.youtube.com/watch?v=zu4FTDUtjKc",
		github:"https://github.com/gu12934/Streamlit/blob/main/plotting/plotting_dashboard.py",

	},
	{
		name:"SQL Analysis of Soccer",
		image: soccer,
		skills: "streamlit, graphing, SQL queries",
		description: "Streamlit project that allows you to upload a sql lite file and run SQL commands on it",
		code: "https://colab.research.google.com/drive/1pvO6jexVTHBl6_4moT_UmH4utyR2fD8j#scrollTo=VJVbpo7nqeVb",
		github: "https://github.com/gu12934/Streamlit/blob/gu12934-sql_streamlit/sql_playground.py",
		youtube: "https://www.youtube.com/watch?v=OGxL7-mkEpY",

	},
	
	

];

const handleCodeClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };