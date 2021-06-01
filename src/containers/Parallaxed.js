import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import styled from "styled-components";

const Overlay = styled.div`
  background-color: #000000;
`;

const Parallaxed = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: "https://i.imgur.com/IqhJZmI.jpg",
          amount: 0.4,
        },
        {
          props: { style: { background: "#000000", opacity: "0.5" } },
          amount: 0.4,
        },
      ]}
      style={{
        height: "300px",
        marginTop: "0",
      }}
    >
    </ParallaxBanner>
  );
};

export default Parallaxed;
