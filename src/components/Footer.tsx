import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 20px;
  position: relative;
  background-color: var(--color2);
  color: var(--textColor1);
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  ul {
    list-style-type: none;
    text-align: left;
    margin: auto;
    
      color: var(--textColor1);
      text-decoration: none;
    }
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>
          <Link to='/openaccount'>Open Account</Link>
        </li>
        <li>
          <Link to='/help'>Help</Link>
        </li>
      </ul>
      &copy;2020 SkyNet Global inc.
    </StyledFooter>
  );
};

export default Footer;
