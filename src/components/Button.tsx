import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--primary);
  border: none;
  width: 200px;
  padding: 10px;
  border-radius: 15px;
  font-size: 1.5rem;
  color: #fff;
  margin: 10px auto;
  display: block;
  &:hover {
    background-color: var(--primaryMedium);
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
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: Props) => {
  return props.onClick ? (
    <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
  ) : (
    <StyledButton>{props.children}</StyledButton>
  );
};

export default Button;
