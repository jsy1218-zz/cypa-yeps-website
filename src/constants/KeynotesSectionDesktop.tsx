import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import '../components/Keynotes.css';

export interface Props {
    imgSource: any;
    title: string;
    paragraph: string;
}

export const KeynotesSectionDesktop = ({ imgSource, title, paragraph }: Props) => (
    <Col md={4}>
        <Row className="show-grid keynotes-title-layout keynotes-icon">
            <Col>
                <img src={imgSource} />
            </Col>
        </Row>

        <Row className="keynotes-description-block">
        <Row className="show-grid keynotes-title-layout">
            <Col>
                <h4>{title}</h4>
            </Col>
        </Row>

        <Row className="show-grid keynotes-description">
            <Col>
                <p>{paragraph}</p>
            </Col>
        </Row>
        </Row>
    </Col>
);