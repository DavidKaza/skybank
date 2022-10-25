import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledDiv = styled.div`
  max-height: 400px;
  background-color: #1b87edeb;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  justify-content: center;
  padding: 20px;
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  .bonusOffer {
    color: #fff;
  }
  p {
    padding: 20px;
  }
  .login {
    padding: 5px 20px;
    border-radius: 15px;
    font-size: 1.5rem;
    color: #1b87edeb;
    background-color: #fff;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    button {
      background-color: #1b87edeb;
      border: none;
      width: 200px;
      padding: 10px;
      border-radius: 15px;
      font-size: 1.5rem;
      color: #fff;
      &:hover {
        background-color: #095296eb;
      }
    }
    a {
      color: #1b87edeb;
      &:hover {
        text-shadow: 1px 1px 4px#d6d6d6;
        color: #095296eb;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    max-height: 500px;
    .login {
      height: 100%;
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
        <h3>Welcome</h3>
        <button>Sign in</button>
        <p>
          Not enrolled? <Link to='/enroll'>Sign up now.</Link>
        </p>
      </div>
    </StyledDiv>
  );
};

export default Hero;
