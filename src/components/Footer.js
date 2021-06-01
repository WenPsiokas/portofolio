import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

const StyledFooter = styled.div`
  background-image: linear-gradient(180deg, #162937, #141639);
  color: #FFFFFF;
  padding: 10px;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <p>
          My portofolio was developed with much <AiFillHeart /> using React and
          Bootstrap! <br />
          All rights reserved {(new Date().getFullYear())}
        </p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
