import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Form from './Form';
const StyledDiv = styled.div`
  max-height: 800px;
  background-color: var(--primary);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  justify-content: center;
  margin: 0;
  h1 {
    font-size: 5rem;
    margin: 0;
    padding: 0;
  }
  h2 {
    font-size: 2.5rem;
    margin: 0;
    padding: 0;
  }
  h3 {
    font-size: 2rem;
  }
  .bonusOffer {
    color: #fff;
  }
  p {
    padding: 20px;
    margin: 0;
  }
  .login {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    p {
      padding: 5px;
      a {
        color: var(--primary);
        &:hover {
          text-shadow: 1px 1px 4px#d6d6d6;
          color: #095296eb;
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    max-height: 600px;
    .login {
      height: 100%;
      width: 100%;
    }
  }
`;
const Hero = () => {
  return (
    <StyledDiv>
      <div className='bonusOffer'>
        <h1>$200</h1>
        <h2>New SkyBank Checking Users</h2>
        <p>When you open a new SkyBank Checking account with direct deposit.</p>
      </div>
      <div className='login'>
        <Form>
          <h3>Welcome</h3>
          <Button>
            <Link to='/signin'>Sign in</Link>
          </Button>
          <p>
            Not enrolled? <Link to='/signup'>Sign up now.</Link>
          </p>
          <p>
            New to SkyBank? <Link to='/openaccount'>Open Account</Link>
          </p>
        </Form>
      </div>
    </StyledDiv>
  );
};

export default Hero;
