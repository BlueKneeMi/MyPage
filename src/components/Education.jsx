
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Education = () => {
    return (
    <section 
        id="education" 
        className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Education
            </h2>
            <VerticalTimeline
            layout="1-column-left"
            lineColor="rgb(250,250,250,0.1)">
                <VerticalTimelineElement
                    className="vertical-timeline-element--school"
                    contentStyle={{ background: 'rgb(39 39 42)', color: 'rgb(212 212 216)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(39, 39, 42)' }}
                    date="2021"
                    iconStyle={{ background: 'rgb(24, 24, 27)', color: '#fff'}}
                >
                    <h3 className="vertical-timeline-element-title">Fashion design certification</h3>
                    <h4 className="vertical-timeline-element-subtitle">Seoul Insitute of Technology and Education</h4>
                    <p>I learned...</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--school"
                    contentStyle={{ background: 'rgb(39 39 42)', color: 'rgb(212 212 216)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(39, 39, 42)' }}
                    date="2010 - 2014"
                    iconStyle={{ background: 'rgb(24, 24, 27)', color: '#fff'}}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor's - Illustration</h3>
                    <h4 className="vertical-timeline-element-subtitle">University of Kyoto Seika, Faculty of Design</h4>
                    <p>Graduated in illustration, the programme was taught in japanese, which I learnt while studying and working part time.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </section>
    );
};

export default Education;