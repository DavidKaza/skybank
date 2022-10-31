import { TransformStreamDefaultController } from 'node:stream/web';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--primary);
  border: none;
  width: 200px;
  padding: 5px;
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
  &[disabled] {
    background-color: #888;
  }
`;

interface Props {
  readonly children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<Props> = (props) => {
  return props.onClick ? (
    <StyledButton
      className={props.className ? props.className : ''}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  ) : (
    <StyledButton disabled={props.disabled ? true : false}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
