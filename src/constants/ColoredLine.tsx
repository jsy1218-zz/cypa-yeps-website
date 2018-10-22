import * as React from 'react';

export interface Props {
    color: string;
    border: string;
    width: string;
    height: string;
}

export const ColoredLine = ({ color, border, width, height }: Props) => (
    <hr
        style={{
            color: color,
            border: border,
            width: width,
            height: height,
        }}
    />
);