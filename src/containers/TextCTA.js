import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 24px;
`;

const Description = styled.div`
  padding: 30px 0;
  text-align: justify;
`;

const Outro = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TextCTA = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Outro>
        <Button>Click me</Button>
      </Outro>
    </Container>
  );
};

export default TextCTA;
