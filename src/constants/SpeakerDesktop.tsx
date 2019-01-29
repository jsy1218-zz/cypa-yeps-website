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

        <Row>
            <Col>
                <h3>{name}</h3>
            </Col>
        </Row>

        <Row>
            <Col>
                <h4>{title} | {company}</h4>
            </Col>
        </Row>
    </Col>
);