import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../components/Keynotes.css';

export interface Props {
    imgSource: any;
    title: string;
    paragraph: string;
}

export const KeynotesSection = ({ imgSource, title, paragraph }: Props) => (
    <Grid>
        <Row className="show-grid keynotes-title-layout">
            <Col xs={10} xsOffset={1}>
                <img src={imgSource} />
            </Col>
        </Row>

        <Row className="show-grid keynotes-title-layout">
            <Col xs={10} xsOffset={1}>
                <h4>{title}</h4>
            </Col>
        </Row>

        <Row className="show-grid keynotes-title-layout keynotes-content">
            <Col xs={10} xsOffset={1}>
                <p>{paragraph}</p>
            </Col>
        </Row>
    </Grid>
);