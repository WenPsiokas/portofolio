import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import Popup from "../components/Modal";

const StyledHeader = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 100px;
  background-image: linear-gradient(180deg, #141639, #162937);
  & a {
    color: #ffffff;
    text-shadow: 1px 1px #000000;
    margin-right: 25px;
  }
  & a:hover {
    color: #c0c0c0;
  }
`;

const Header = () => {
  return (
    <div>
      <StyledHeader>
        <div>
          <Link to="/" className="item">
            Home
          </Link>
          <Link to="/about-me" className="item">
            About me
          </Link>
        </div>
        {/* <div>
          <Popup
            title={"Login panel"}
            body={"Woohoo, you're reading this text in a modal!"}
          />
        </div> */}
      </StyledHeader>
    </div>
  );
};

export default Header;
