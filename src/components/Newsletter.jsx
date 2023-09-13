import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  letter-spacing: 0.2rem;
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Desc = styled.div`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

const InputContainer = styled.div`
  width: 45%;
  height: 3rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  flex: 8;
  border: none;
  outline: none;
  margin-left: 1rem;
  font-size: 1.5rem;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  transition: all 0.2s linear;
  background-color: #2b2828;
  color: teal;
  cursor: pointer;

  &:hover{
    color: black;
    background-color: #818181;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
