import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import '../components/Speakers.css';

export interface Props {
    imgSource: any;
    name: string;
    title: string;
    company: string;
}

export const Speaker= ({ imgSource, name, title, company }: Props) => (
    <Col xs={3} xsOffset={0}>
        <Row>
            <Col>
                <img className="speakers-img" src={imgSource} />
            </Col>
        </Row>

        <Row className="speakers-name">
            <Col>
                <h3>{name}</h3>
            </Col>
        </Row>

        <Row className="speakers-title">
            <Col>
                <p>{title}  {company}</p>
            </Col>
        </Row>
    </Col>
);