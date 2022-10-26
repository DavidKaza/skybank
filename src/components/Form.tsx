import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 20px auto;
  background-color: #fff;
  color: var(--primaryDark);
  input {
    font-size: 1.2rem;
    border-radius: 10px;
    margin: 5px;
    padding: 5px;
    width: 350px;
  }
  label {
    padding: 15px 0px 8px 0px;
  }
`;

interface Props {
  readonly children: React.ReactNode;
  action?: string;
  className?: string;
  method?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form = (props: Props) => {
  function defaultOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <StyledForm
      action={props.action ? props.action : ''}
      className={props.className ? props.className : ''}
      method={props.method ? props.method : ''}
      onSubmit={props.onSubmit ? props.onSubmit : defaultOnSubmit}
    >
      {props.children}
    </StyledForm>
  );
};

export default Form;
