import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  flex: 1;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.2s linear;

  &:hover {
    background-color: rgba(223, 223, 223, 0.6);
  }
`;

const Title = styled.h1``;

const Button = styled.button`
  margin: 0.7rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 300;
  background: transparent;
  cursor: pointer;
  transition: all 0.1s linear;

  &:hover {
    transform: scale(1.01, 1.01);
    font-weight: 500;
    box-shadow: 8px 16px 16px hsl(0deg 0% 0% / 0.25);
  }
`;

const CategoriesItem = ({ category }) => {
  return (
    <Container>
      <Image src={category.img} />
      <Info>
        <Title>{category.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoriesItem;
