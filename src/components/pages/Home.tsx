import styled from 'styled-components';
import BGVideo from '../BGVideo';
import myVideo from '../../assets/myVideo.mp4';
import Hero from '../Hero';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
const StyledMain = styled.main`
  h1 {
    text-align: center;
  }
  .showcase {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 30px;
    padding: 50px;
    div {
      box-shadow: 2px 2px 5px #00000043;
      border-radius: 15px;
      padding: 20px;
      background-color: #fff;
      img {
        width: 90%;
        height: 60%;
        object-fit: cover;
        border-radius: 35px;
        padding: 20px;
      }
      p {
        padding: 20px;
      }
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
    }
    @media screen and (max-width: 1600px) {
      grid-template-columns: 1fr 1fr;
      row-gap: 30px;
      div:nth-child(3) {
        grid-column: span 2;
      }
    }
    @media screen and (max-width: 1100px) {
      grid-template-columns: 1fr;
      row-gap: 30px;
      div:nth-child(3) {
        grid-column: span 1;
      }
    }
  }
`;

const Home = () => {
  return (
    <StyledMain>
      <section>
        <Hero />
        <BGVideo source={myVideo} />
      </section>
      <section>
        <div className='showcase'>
          <div>
            <h3>Apply for a Skybank Credit Card Today</h3>
            <img src={image1} alt='random stock'></img>
            <p>
              Getting started is east. Checking eligibilty wont impact your
              credit score.
            </p>
            <button>Learn More</button>
          </div>
          <div>
            <h3>Choose the right Skynet Credit Card for You</h3>
            <img src={image2} alt='random stock'></img>
            <p>
              Getting started is east. Checking eligibilty wont impact your
              credit score
            </p>
            <button>Learn More</button>
          </div>
          <div>
            <h3>Save with CD rates over 3.00% APY</h3>
            <img src={image3} alt='random stock'></img>
            <p>
              Open a fixed-rate CD & enjoy the peace and mind that comses with a
              guaranteed interest rate for term of CD.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </section>
    </StyledMain>
  );
};

export default Home;
