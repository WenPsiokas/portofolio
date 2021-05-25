import React from "react";
import data from "../data/brickData.json";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  color: #fff;
  align-items: center;
`;

const SectionR = styled.div`
  width: 50%;
`;

const SectionL = styled.div`
  margin-left: -50px;
  width: 50%;
`;

const BrickItem = () => {
  return (
    <Container>
      {data.data.map((item, i) => (
        <Item key={i}>
          <SectionR>
            <img alt="Avatar" style={{ width: "50%" }} src={item.icon} />
          </SectionR>
          <SectionL>
            <div style={{fontSize: "20px", paddingBottom:"10px"}}>{item.title}</div>
            <div>{item.description}</div>
          </SectionL>
        </Item>
      ))}
    </Container>
  );
};

export default BrickItem;
