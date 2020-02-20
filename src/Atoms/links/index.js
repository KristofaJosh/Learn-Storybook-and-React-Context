import React from 'react'
import styled from 'styled-components'
import { color, hover } from "./mixins";


export default function Nav(props) {
    let slash = '';

    if (props.isActive) {
        slash = '/';
    } 
    return (
        <Linknav variant={props.variant}>
            {slash}{props.children}{slash}
        </Linknav>
    )
}


const Linknav = styled.div`
    color: ${color};

    &:hover {
        color: ${hover};
    }
`;
