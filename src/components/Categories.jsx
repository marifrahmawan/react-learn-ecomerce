import React from 'react';
import styled from 'styled-components';
import { categoriesData } from './categoriesData';
import CategoriesItem from './CategoriesItem';

const Container = styled.div`
  display: flex;
`;

const Categories = () => {
  return (
    <Container>
      {categoriesData.map((category) => (
        <CategoriesItem category={category} />
      ))}
    </Container>
  );
};

export default Categories;
