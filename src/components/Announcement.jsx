import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 1.5rem;
  background-color: teal;
  color: white;
  padding: 0rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 200;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Announcement = () => {
  return <Container>Gratis Ongkir 9.9 Sale, Promo Kejutan Diskon Hingga 99% </Container>;
};

export default Announcement;
