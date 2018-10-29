import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Agenda.css';

export const Agenda: React.StatelessComponent<{}> = () => {
    return (
        <Grid>
            <Row className="show-grid agenda-title-layout-small">
                <Col xs={10} xsOffset={1}>
                    <h3><span className="agenda-title-font">— Agenda —</span></h3>
                </Col>
            </Row>

            <VerticalTimeline layout={'1-column'}>
                <div className="vertical-timeline-element-content agenda-meme">
                    <span className="agenda-meme-font">start of the day</span>
                </div>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">7:30 - 8:00 AM</h3>
                    <h3 className="vertical-timeline-element-title">Registration Opens</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">8:00 - 8:30 AM</h3>
                    <h3 className="vertical-timeline-element-title">Welcome</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">8:30 - 9:30 AM</h3>
                    <h3 className="vertical-timeline-element-title">Keynote: Career</h3>
                    <p>
                    Barcoding's commitment to our customers is that we provide them with the ability to be more efficient, 
                    accurate, and connected. This year we will host two content tracks to help you do just that.
                    </p>
                </VerticalTimelineElement>

                <div className="vertical-timeline-element-content agenda-meme">
                    <span className="agenda-meme-font">mid day</span>
                </div>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">12:00 - 1:00 PM</h3>
                    <h3 className="vertical-timeline-element-title">Lunch</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">1:00 - 2:00 PM</h3>
                    <h3 className="vertical-timeline-element-title">Breakout Sessions</h3>
                    <p>
                    Barcoding's commitment to our customers is that we provide them with the ability to be more efficient, 
                    accurate, and connected.
                    </p>
                </VerticalTimelineElement>

                <div className="vertical-timeline-element-content agenda-meme">
                    <span className="agenda-meme-font">end of the day</span>
                </div>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">4:30 - 5:00 PM</h3>
                    <h3 className="vertical-timeline-element-title">Closing Remarks</h3>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </Grid>
    );
}

export default Agenda;