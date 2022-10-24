import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  nav {
    color: #333;
    div.upperNav {
      padding: 5px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style-type: none;
      div {
        display: flex;
        align-items: center;
        a {
          padding: 10px;
          text-decoration: none;
          color: #333;
        }
      }
      ul {
        list-style-type: none;

        li {
          a {
            padding: 10px;
            text-decoration: none;
            color: #333;
          }
          button {
            background-color: transparent;
            border: none;
            font-size: 1rem;
          }
        }
      }
    }
    ul.lowerNav {
      align-items: center;
      list-style-type: none;
      display: flex;
      justify-content: space-evenly;
      padding: 15px;
      background-color: #0f2157;
      li {
        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
`;

const Header: React.FC = () => {
  const [loggedInState, setLoggedIn] = useState(false);

  const handleLoginState = () => {
    setLoggedIn(!loggedInState);
  };

  return (
    <StyledHeader>
      <nav>
        <div className='upperNav'>
          <div className='Logo'>
            <Link to='/'>SkyNet</Link>
          </div>
          <ul>
            {loggedInState ? (
              <div className='user-menu'>
                <li>
                  <Link to='profile'>Profile</Link>
                </li>
                <li>
                  <button onClick={handleLoginState}>Sign Out</button>
                </li>
              </div>
            ) : (
              <div className='user-menu'>
                <li>
                  <button onClick={handleLoginState}>Sign In</button>
                </li>
              </div>
            )}
          </ul>
        </div>

        {loggedInState && (
          <ul className='lowerNav'>
            <li>
              <Link to='/accounts'>Accounts</Link>
            </li>
            <li>
              <Link to='/payments'>Payments and Transfers</Link>
            </li>
            <li>
              <Link to='/messages'>Messages</Link>
            </li>
            <li>
              <Link to='/OpenAccount'>Open Account</Link>
            </li>
            <li>
              <Link to='/help'>Help</Link>
            </li>
          </ul>
        )}
      </nav>
    </StyledHeader>
  );
};

export default Header;
