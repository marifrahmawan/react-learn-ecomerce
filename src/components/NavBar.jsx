import React from 'react';

import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  height: 4rem;
`;

const Wrapper = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 1rem;
  margin-right: 0.2rem;
  transition: transform 0.2s linear;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: #49bb3f;
    transform: translate(0, -30%);
  }
`;

const SearchContainer = styled.div`
  border: 0.5px solid #5e5e5e;
  display: flex;
  align-items: center;
  margin-left: 2.3rem;
  border-bottom-left-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
`;

const Input = styled.input`
  border: none;
  padding: 0.2rem;
  border-radius: 0.2rem;
  font-size: 1rem;
`;

const Search = styled(SearchIcon)`
  cursor: pointer;
  transition: color 0.2s linear;

  &:hover {
    color: #49bb3f;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s linear;

  &:hover {
    color: #49bb3f;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  align-items: center;
`;

const MenuItem = styled.div`
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s linear;

  &:hover {
    transform: scale(1.2, 1.2);
  }
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <Language>ID</Language>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>COKPED.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
