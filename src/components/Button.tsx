import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #1b87edeb;
  border: none;
  width: 200px;
  padding: 10px;
  border-radius: 15px;
  font-size: 1.5rem;
  color: #fff;
  margin: 10px;
  &:hover {
    background-color: #095296eb;
  }
  > a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-shadow: none;
      color: #fff;
    }
  }
`;

interface Props {
  readonly children: React.ReactNode;
}

const Button = (props: Props) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default Button;
