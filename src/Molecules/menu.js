import React, { useState } from "react";
import styled from "styled-components";
import Links from "../Atoms/links";
import { ThemeProvider } from "styled-components";
import Button from "../Atoms/button";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Menu() {
  let curpage = window.location.href.split("/");
  curpage = curpage[curpage.length - 1];
  const [page, setpage] = useState(curpage);

  const links = ["Home", "About", "Work", "Contacts"];

  const theme = {
    mode: "light"
  };

  const pageSelector = e => {
    let page = e.target.innerText.toLowerCase();
    setpage(page);
  };

  return (
    <>
      <Router>
        <MenuStyle>
          <ThemeProvider theme={theme}>
            {links.map(el => (
              <Link
                to={"/" + el.toLowerCase()}
                onClick={pageSelector}
                key={links.indexOf(el)}
              >
                <Links
                  variant={el.toLowerCase() === page ? "primary" : "secondary"}
                  isActive={el.toLowerCase() === page ? true : false}
                  key={links.indexOf(el)}
                >
                  {el}
                </Links>
              </Link>
            ))}
            <Button variant="primary">
              <Link to="/" />
              brief me
            </Button>
          </ThemeProvider>
        </MenuStyle>
      </Router>
    </>
  );
}

const MenuStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;

  link {
    text-decoration: none;
    text-decoration-line: none;
  }
`;
