import React from 'react';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { FavoriteBorderOutlined, SearchOutlined } from '@mui/icons-material';

const Container = styled.div`
  width: calc((100% / 6) - 1rem);
  height: 25rem;
  margin: 0.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.2s linear;
  border-radius: 1rem;

  &:hover {
    box-shadow: 8px 16px 16px hsl(0deg 0% 0% / 0.25);
    transform: scale(1.01);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: cover;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;

const Icons = styled.div`
  width: 40px;
  height: 40px;
  margin: 0rem 0.5rem;
  background-color: rgb(255, 255, 255);
  padding: 0.2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background-color: #b9b8b8;
    transform: scale(1.1);
  }
`;

const Product = ({ product }) => {
  return (
    <Container>
      <Image src={product.img} />
      <Info>
        <Icons>
          <ShoppingCartOutlinedIcon />
        </Icons>
        <Icons>
          <SearchOutlined />
        </Icons>
        <Icons>
          <FavoriteBorderOutlined />
        </Icons>
      </Info>
    </Container>
  );
};

export default Product;
