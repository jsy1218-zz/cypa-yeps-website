import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Keynotes.css';
import { KeynotesSectionDesktop } from 'src/constants/KeynotesSectionDesktop';

export const KeynotesDesktop: React.StatelessComponent<{}> = () => {
    let keynotesProps: { imgSource: any, title: string, paragraph: string}[] = [
         { imgSource: require('../images/flame.png'), title: "Coding Dojo", paragraph: "Are you a startup or entrepreneur looking for funding? Have a passion for discovering new and emerging technologies? At Xinno Week 2018, Attendees had the opportunity to do both! They pitched their startup or idea to U.S. and China based investors and heard pitches from some of the fastest growing technology startups in the Pacific Northwest." }
        ,{ imgSource: require('../images/globe.png'), title: "Finance Related", paragraph: "Are you a startup or entrepreneur looking for funding? Have a passion for discovering new and emerging technologies? At Xinno Week 2018, Attendees had the opportunity to do both! They pitched their startup or idea to U.S. and China based investors and heard pitches from some of the fastest growing technology startups in the Pacific Northwest." }
        ,{ imgSource: require('../images/blockchain.png'), title: "BlockChain", paragraph: "Are you a startup or entrepreneur looking for funding? Have a passion for discovering new and emerging technologies? At Xinno Week 2018, Attendees had the opportunity to do both! They pitched their startup or idea to U.S. and China based investors and heard pitches from some of the fastest growing technology startups in the Pacific Northwest." }
    ];

    return (
        <Grid>
            <Row className="show-grid keynotes-title-layout-small">
                <Col xs={10} xsOffset={1}>
                    <h3 className="keynotes-title-font">Keynotes</h3>
                </Col>
            </Row>

            <Row>
                <KeynotesSectionDesktop
                    imgSource={keynotesProps[0].imgSource}
                    title={keynotesProps[0].title}
                    paragraph={keynotesProps[0].paragraph} />
                <KeynotesSectionDesktop
                    imgSource={keynotesProps[1].imgSource}
                    title={keynotesProps[1].title}
                    paragraph={keynotesProps[1].paragraph} />
                <KeynotesSectionDesktop
                    imgSource={keynotesProps[2].imgSource}
                    title={keynotesProps[2].title}
                    paragraph={keynotesProps[2].paragraph} />
            </Row>
            {/* TODO: Need to do this margin correctly*/}
            <Row className="margin-placeholder"/>
        </Grid>
    );
}

export default KeynotesDesktop;