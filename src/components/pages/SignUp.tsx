import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import Form from '../Form';
const StyledMain = styled.main`
  h1 {
    padding: 20px;
    background-color: var(--primary);
    color: #fff;
  }
  p {
    padding: 20px;
    max-width: 750px;
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-align: left;
    margin: auto;
  }
  .signup-container {
    min-height: calc(100vh - 350px);
    display: grid;
    align-items: center;
    justify-content: center;
  }
`;

const SignUp = () => {
  return (
    <StyledMain>
      <h1>Sign Up for Online Access</h1>
      <section className='signup-container'>
        <p>
          You'll be able to view and manage your account online in a few easy
          steps. First we'll need to verify your identity. Fill out the form
          below to get started.
        </p>
        <Form>
          <label htmlFor='accountNumber'>Account Number</label>
          <input id='accountNumber' type='text' />
          <label htmlFor='ssn'>
            Social Security Number (SSN) or Tax ID Number (TIN)
          </label>
          <input id='ssn' type='text' />
          <Button>Next</Button>
          <p>Already enrolled?</p>
          <Link to='/signin'>Signup In</Link>
        </Form>
      </section>
    </StyledMain>
  );
};

export default SignUp;
