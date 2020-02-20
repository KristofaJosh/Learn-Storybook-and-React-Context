import React from 'react';
import styled from 'styled-components';


export default function nav(props) {
    return (
        <Nav>{props.children}</Nav>
    )
}


const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
`;