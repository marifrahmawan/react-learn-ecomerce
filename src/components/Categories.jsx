import React from 'react';
import styled from 'styled-components';
import { categoriesData } from '../data';
import CategoriesItem from './CategoriesItem';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

const Categories = () => {
  return (
    <Container>
      <Wrapper>
        {categoriesData.map((category) => (
          <CategoriesItem category={category} key={category.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;
