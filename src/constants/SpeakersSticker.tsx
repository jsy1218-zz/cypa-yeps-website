import * as React from 'react';

import '../components/Speakers.css';

export interface Props {
    title: string;
    company: string;
}

export const SpeakersSticker = ({ title, company }: Props) => (
    <div className="speakers-sticker-layout">
        <span className="speakers-sticker-font">{title}  {company}</span>
    </div>
);