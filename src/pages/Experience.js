import React from 'react'
import {
  VerticalTimeline, 
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="September 2015-June 2020" 
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon= {<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            University of Calgary, Biological Science
          </h3>
          <p> Bachelor of Science</p>
        
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="September 2020- April 2021" 
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon= {<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
          HSBC Social Innovation Academy | Virtual — Research Fellow/Analyst
          </h3>
          <p> Bootcamps for Change (BCFC) Case Study, Connect First Credit Union (CFCU) Case Study</p>
        
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="May 2021-August 2021" 
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon= {<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
          Npower Calgary, Calgary, AB
          </h3>
          <p> IBM Data Analyst Certificate, Google PM Certificate, DP-900, AZ-900, AI-900</p>
        
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date="August 2021 - December 2021" 
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon= {<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
          Longview Systems Inc, Calgary, AB (REMOTE) 
          </h3>
          <p>System Consultant - Provide fully documented customer issues in a ticket management system, analyze the customer’s symptoms, determine
the customer’s urgency, and where possible provide resolution to the customer’s issue</p>
        
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date="September 2021– Present" 
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon= {<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
          Makerkids Leaside, Toronto, ON (REMOTE) 
          </h3>
          <p>Technical Instructor (Seasonal) - Teach MakerKids programming – including Robotics, Coding and Minecraft
</p>
        
        </VerticalTimelineElement>

        
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="December 2021-March 2022" 
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon= {<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
          Alberta Machine Intelligence Institute (AMII), Calgary, AB 
          </h3>
          <p> Machine Learning Technician I</p>
        
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date="December 2021 – March 2022" 
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon= {<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
          Motionhall Inc, Vancouver, BC (REMOTE) 
          </h3>
          <p>Scientific Analyst- Studying and reviewing the mechanisms of action and scientific specifics of new medical innovations being developed by
biotech companies around the globe
</p>
        
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="April 2022-August 2022" 
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon= {<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
          Southern Alberta Institute of Technology SAIT, Calgary, AB 
          </h3>
          <p>Post-Dipolma Data Analytics</p>
        
        </VerticalTimelineElement>
       
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="October 2022 – April 2023" 
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon= {<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
          Cybera Inc, Calgary, AB (HYBRID)
          </h3>
          <p>Applied Data Science Lab (ADSL) Intern - Computer Vision (Full time)- Developing computer vision models to calculate distance among objects and conduct object detection</p>
      </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;