import * as React from 'react';
import { Carousel } from 'react-bootstrap';

import "./Speakers.css";

export const Speakers: React.StatelessComponent<{}> = () => {
    let speakersProps: { imgSource: any, name: string}[] = [
        { imgSource: require('../images/Emily Shuka.png'), name: "Emily Shuka" }
       ,{ imgSource: require('../images/Steve Stubbs 1.png'), name: "Steve Stubbs" }
       ,{ imgSource: require('../images/Steve Stubbs 2.png'), name: "Steve Stubbs" }
       ,{ imgSource: require('../images/Steve Stubbs 3.png'), name: "Steve Stubbs" }
   ];

    return (
        <Carousel>
            <Carousel.Item>
                <img className="speakers-img" src={speakersProps[0].imgSource} />
                <Carousel.Caption>
                    <h3>{speakersProps[0].name}</h3>
                </Carousel.Caption>
            </Carousel.Item>        
            <Carousel.Item>
                <img className="speakers-img" src={speakersProps[1].imgSource} />
                <Carousel.Caption>
                    <h3>{speakersProps[1].name}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="speakers-img" src={speakersProps[2].imgSource} />
                <Carousel.Caption>
                    <h3>{speakersProps[2].name}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="speakers-img" src={speakersProps[3].imgSource} />
                <Carousel.Caption>
                    <h3>{speakersProps[3].name}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Speakers;