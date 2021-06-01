import React from "react";
import styled from "styled-components";
import TextCTA from "./TextCTA";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #ffffff;
`;

const SectionOne = styled.div`
  width: 50%;
  padding: 25px;
`;

const SectionTwo = styled.div`
  width: 50%;
  border-left: 1px solid #c0c0c0;
  padding: 25px;
`;

const FiftyFifty = () => {
  return (
    <Container>
      <SectionOne>
        <TextCTA
          title={"What is Lorem Ipsum?"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          outro={"Button"}
        />
      </SectionOne>
      <SectionTwo>
        <TextCTA
          title={"What is Lorem Ipsum?"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          outro={"Button"}
        />
      </SectionTwo>
    </Container>
  );
};

export default FiftyFifty;
