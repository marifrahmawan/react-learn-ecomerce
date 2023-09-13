import React from 'react';
import styled from 'styled-components';
import { products } from '../data';
import Product from './Product';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: beige;
  padding: 3rem 0rem;
`;

const Wrapper = styled.div`
  display: flex;
  width: 95%;
  flex-wrap: wrap;
  justify-content: start;
`;

const Products = () => {
  return (
    <>
      <Container>
        <Wrapper>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default Products;
