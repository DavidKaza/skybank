import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  nav {
    color: #333;
    div.upperNav {
      padding: 5px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style-type: none;
      ul {
        list-style-type: none;
        display: flex;
        align-items: center;
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
          <div>SkyNet</div>
          <ul>
            {loggedInState ? (
              <>
                <li>
                  <a href='profile'>Profile</a>
                </li>
                <li>
                  <button onClick={handleLoginState}>Sign Out</button>
                </li>
              </>
            ) : (
              <li>
                <button onClick={handleLoginState}>Sign In</button>
              </li>
            )}
          </ul>
        </div>

        {loggedInState && (
          <ul className='lowerNav'>
            <li>
              <a href='/accounts'>Accounts</a>
            </li>
            <li>
              <a href='/payments'>Payments and Transfers</a>
            </li>
            <li>
              <a href='/messages'>Messages</a>
            </li>
            <li>
              <a href='/newaccount'>Open Account</a>
            </li>
            <li>
              <a href='/accounts'>Help</a>
            </li>
          </ul>
        )}
      </nav>
    </StyledHeader>
  );
};

export default Header;
