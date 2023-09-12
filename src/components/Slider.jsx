import React, { useEffect, useState } from 'react';

import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import { sliderData } from './SliderData';

const Container = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(68, 68, 68, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0.5rem;
  transition: transform 0.2s linear;
  position: absolute;
  left: ${({ direction }) => direction === 'left' && '10px'};
  right: ${({ direction }) => direction === 'right' && '10px'};

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

const Wrapper = styled.div`
  min-width: 100%;
  height: calc(100vh - 5.5rem);
`;

const Slide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.bgcolor};
`;

const ImgContainer = styled.div`
  width: 100%;
  flex: 1;

  animation: 0.5s linear 0s showSlowly;
  @keyframes showSlowly {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  height: calc(100vh - 7.5rem);
  width: 75%;
  object-fit: cover;
  border-radius: 1rem;
  margin: 1rem 1rem 1rem 5rem;

  box-shadow: 8px 16px 16px hsl(0deg 0% 0% / 0.25);
`;

const InfoContainer = styled.div`
  flex: 1;
  padding-right: 1rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  transition: all 0.2s linear;

  animation: 0.5s linear 0s showSlowly;
  @keyframes showSlowly {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Desc = styled.p`
  margin: 2rem 0rem;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.4rem;

  animation: 0.5s linear 0s showSlowly;
  @keyframes showSlowly {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 1rem;
  font-weight: 300;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.1s linear;

  &:hover {
    font-weight: 500;
    color: teal;
    box-shadow: 8px 16px 16px hsl(0deg 0% 0% / 0.25);
    transform: scale(1.01, 1.01);
  }
`;

const Slider = () => {
  const [slidesData, setSlidesData] = useState([]);
  const [curSlide, setCurSlide] = useState(0);

  useEffect(() => {
    setSlidesData(sliderData);
  }, []);

  const nextSlide = () => {
    setCurSlide(curSlide === slidesData.length - 1 ? 0 : curSlide + 1);
  };

  const prevSlide = () => {
    setCurSlide(curSlide === 0 ? slidesData.length - 1 : curSlide - 1);
  };

  return (
    <Container>
      <Arrow direction="left" onClick={prevSlide}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        {slidesData.map(
          (slide, index) =>
            index === curSlide && (
              <Slide key={index} bgcolor={slide.bgColor}>
                <ImgContainer>
                  <Image src={slide.image} />
                </ImgContainer>
                <InfoContainer>
                  <Title>{slide.title}</Title>
                  <Desc>{slide.desc}</Desc>
                  <Button>SHOP NOW</Button>
                </InfoContainer>
              </Slide>
            )
        )}
      </Wrapper>
      <Arrow direction="right" onClick={nextSlide}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
