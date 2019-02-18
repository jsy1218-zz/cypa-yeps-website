import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import '../components_desktop/Keynotes.css';

export interface Props {
    imgSource: any;
    title: string;
    paragraph: string;
}

export const KeynotesSectionDesktop = ({ imgSource, title, paragraph }: Props) => (
    <Col md={4} className="keynotes-block">
        <Row className="show-grid keynotes-title-layout keynotes-icon">
            <Col>
                <img src={imgSource} />
            </Col>
        </Row>

        <Row className="show-grid keynotes-title-layout">
            <Col>
                <h4>{title}</h4>
            </Col>
        </Row>

        <Row className="show-grid keynotes-title-layout keynotes-content">
            <Col>
                <p>{paragraph}</p>
            </Col>
        </Row>
    </Col>
);