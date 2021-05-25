import React from "react";
import { Carousel } from "react-bootstrap";

const HeroCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/GWtRVh3.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>What drives me?</h3>
          <p>My passion to develop robust and beautiful UIs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/n2TBB66.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>What motivates me?</h3>
          <p>
            I have always wanted to ensure that my company's clients get the
            best customer service I can offer. I feel it's important, both to me
            personally and for the company and the clients, to provide a
            positive customer experience.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/lDG5urp.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>What are my hobbies?</h3>
          <p>
            I like, camping, hiking, badminton and during the summer I like to
            water-ski!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
