
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Experience = () => {
    return (
    <section 
        id="experience" 
        className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Work experience
            </h2>
            <VerticalTimeline
            layout="1-column-left"
            lineColor="rgb(250,250,250,0.1)">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(39 39 42)', color: 'rgb(212 212 216)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(39, 39, 42)' }}
                    date="2022"
                    iconStyle={{ background: 'rgb(24, 24, 27)', color: '#fff'}}
                >
                    <h3 className="vertical-timeline-element-title">Jack of all trades</h3>
                    <h4 className="vertical-timeline-element-subtitle">Fashion center</h4>
                    <p> At a fashion center I had multiple responsibilities</p>
                    <ul class="list-disc pl-4">
                        <li>CAD cam assistant</li>
                        <li>Tailor</li>
                        <li>Promotion at events</li>
                        <li>Customer manager</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(39 39 42)', color: 'rgb(212 212 216)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(39, 39, 42)' }}
                    date="2021"
                    iconStyle={{ background: 'rgb(24, 24, 27)', color: '#fff'}}
                >
                    <h3 className="vertical-timeline-element-title">Data Labeller</h3>
                    <h4 className="vertical-timeline-element-subtitle">Samyeong Soft Inc</h4>
                    <p>Worked as a data labeller...</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(39 39 42)', color: 'rgb(212 212 216)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(39, 39, 42)' }}
                    date="2018-2019"
                    iconStyle={{ background: 'rgb(24, 24, 27)', color: '#fff'}}
                >
                    <h3 className="vertical-timeline-element-title">Research Assistant</h3>
                    <h4 className="vertical-timeline-element-subtitle">Seoul, National Institute of Forest Science</h4>
                    <p>Supporting the researchers. Translated the scientific reports from Japanese.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(39 39 42)', color: 'rgb(212 212 216)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(39, 39, 42)' }}
                    date="2017"
                    iconStyle={{ background: 'rgb(24, 24, 27)', color: '#fff'}}
                    >
                    <h3 className="vertical-timeline-element-title">Exhibition Staff</h3>
                    <h4 className="vertical-timeline-element-subtitle">Seoul Arts Center</h4>
                    <p>Worked...</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(39 39 42)', color: 'rgb(212 212 216)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(39, 39, 42)' }}
                    date="2016"
                    iconStyle={{ background: 'rgb(24, 24, 27)', color: '#fff'}}
                    >
                    <h3 className="vertical-timeline-element-title">Exhibition Staff</h3>
                    <h4 className="vertical-timeline-element-subtitle">Culture Station Seoul 284</h4>
                    <p>Worked...</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(39 39 42)', color: 'rgb(212 212 216)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(39, 39, 42)' }}
                    date="2011-2014"
                    iconStyle={{ background: 'rgb(24, 24, 27)', color: '#fff'}}
                    >
                    <h3 className="vertical-timeline-element-title">Assistant</h3>
                    <h4 className="vertical-timeline-element-subtitle">Kyoto Satake Flower Shop</h4>
                    <p>As a student, worked....</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </section>
    );
};

export default Experience;