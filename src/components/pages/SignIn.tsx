import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import Form from '../Form';
const StyledMain = styled.main`
  h1 {
    padding: 20px;
    background-color: var(--primary);
    color: #fff;
    width: 100%;
  }
  .login-container {
    min-height: calc(100vh - 250px);
    display: grid;
    align-items: center;
    justify-content: center;
  }
  p {
    padding: 20px;
    max-width: 750px;
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-align: left;
    margin: auto;
  }
`;

const SignIn = () => {
  return (
    <StyledMain>
      <h1>Welcome back!</h1>
      <section className='login-container'>
        <Form>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' />
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' />
          <Button>Sign In</Button>
          <p>Not enrolled?</p>
          <Link to='/signup'>Signup Now</Link>
        </Form>
      </section>
    </StyledMain>
  );
};

export default SignIn;
