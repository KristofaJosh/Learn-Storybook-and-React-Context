// A green line

import React from 'react';
import styled from 'styled-components';
import { GREEN } from '../colors';

export default function hr() {
    return (
        <Line></Line>
    )
}


const Line = styled.div`
    background-color: ${GREEN};
    width: 100%;
    height: 2.5px;
`;