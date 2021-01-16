import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

/*
    CustomMediaQuery
        - allow you to config your styled component without the guessing
*/
// interface mediaProps {
//     custom?: Function,
//     desktop: (minWidth: number) => void,
// }

const customMediaQuery = (minWidth: number) =>
    `@media (min-width: ${minWidth}px)`;

const media = {
    custom: customMediaQuery,
    desktop: customMediaQuery(922),
    tablet: customMediaQuery(768),
    phone: customMediaQuery(576),
}



/*

*/

type FlexProps = {
    children: any;
    height?: String;
    width?: String;
    display: string;
    justifyContent: String;
    alignItems: String;
}

export const Flex = styled.div<FlexProps>`
    width: 100%;
    display: flex;
    justify-content: 'space-between';
    align-items: center;

    ${media.desktop} {
        max-width: 1400px;
        margin: auto;
    }
`

export const Box = styled.div<FlexProps>`
    

    ${media.tablet} {
        display: none;
    }
`


