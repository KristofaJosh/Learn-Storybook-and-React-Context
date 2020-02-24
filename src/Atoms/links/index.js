import React from 'react'
import styled from 'styled-components'
import { color, hover } from "./mixins";


export default function Nav(props) {
    let slash, arrow = '';

    if (props.isActive) {
        slash = '/';
    }

    if (props.isSocialActive) {
        arrow = '->';
    } 
    return (
        <Linknav variant={props.variant}>
            {slash || arrow }{props.children}{slash}
        </Linknav>
    )
}


const Linknav = styled.div`
    color: ${color};

    &:hover {
        color: ${hover};
    }
`;
