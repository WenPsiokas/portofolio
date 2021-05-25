import React from "react";
import styled from "styled-components";

import BrickItem from "./BrickItem";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #141414;
`;

const Brick = () => {
  return (
    <Container>
      <BrickItem />
    </Container>
  );
};

export default Brick;
