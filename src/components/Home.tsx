import React, { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCars } from "../features/Car/carSlice";
import Section from "./Section";

interface HomeInterface {
  homeRef: React.RefObject<HTMLDivElement>;
}
function Home(props: HomeInterface) {
  const { homeRef } = props;
  const cars = useSelector(selectCars);

  return (
    <Container ref={homeRef}>
      {cars.map((car) => (
        <Section
          key={car.id}
          id={car.id}
          title={car.title}
          description={car.description}
          backgroundImg={car.backgroundImg}
          leftBtnText={car.leftBtnText}
          rightBtnText={car.rightBtnText}
        />
      ))}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  overflow: scroll;
  text-align: center;
  height: 100vh;
  scroll-snap-type: y mandatory;
`;