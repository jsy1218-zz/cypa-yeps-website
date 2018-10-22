import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../components/keynotes.css';

export interface Props {
    imgSource: any;
    title: string;
    paragraph: string;
}

export const KeynotesSection = ({ imgSource, title, paragraph }: Props) => (
    <Grid>
        <Row className="show-grid keynotes-title-layout">
            <Col xs={7} xsOffset={3}>
                <img src={imgSource} />
            </Col>
        </Row>

        <Row className="show-grid keynotes-title-layout">
            <Col xs={7} xsOffset={3}>
                <h3>{title}</h3>
            </Col>
        </Row>

        <Row className="show-grid">
            <Col xs={7} xsOffset={3}>
                <p>{paragraph}</p>
            </Col>
        </Row>
    </Grid>
);