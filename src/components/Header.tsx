import * as React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../shared/hooks';
import { selectUser, setDefault } from '../shared/UserSlicer';
import Button from './Button';

export const StyledHeader = styled.header`
  background-color: #ffffffe2;
  position: sticky;
  top: 0;
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
        margin: 0;
        padding: 0;
        li {
          a {
            padding: 10px;
            text-decoration: none;
            color: #333;
          }
          button {
            font-size: 1rem;
            width: auto;
            background: transparent;
            color: var(--primaryDark);
          }
        }
      }
    }
    ul.lowerNav {
      align-items: center;
      list-style-type: none;
      display: flex;
      justify-content: space-evenly;
      padding: 10px;
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
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  let navigateHome = useNavigate();
  return (
    <StyledHeader>
      <nav>
        <div className='upperNav'>
          <div className='Logo'>
            <Link to='/'>SkyNet</Link>
          </div>
          <ul>
            {user.id ? (
              <div className='user-menu'>
                <li>
                  <Link to='profile'>Profile</Link>
                </li>
                <li>
                  <Button
                    onClick={() => {
                      dispatch(setDefault());
                      navigateHome('/');
                    }}
                  >
                    Sign Out
                  </Button>
                </li>
              </div>
            ) : (
              <div className='user-menu'>
                <li>
                  <Link to='/signin'>Sign In</Link>
                </li>
              </div>
            )}
          </ul>
        </div>
        {user.id ? (
          <ul className='lowerNav'>
            <li>
              <Link to='/accounts'>Accounts</Link>
            </li>
            <li>
              <Link to='/openaccount'>Open New Account</Link>
            </li>
            <li>
              <Link to='/payments'>Payments and Transfers</Link>
            </li>
            <li>
              <Link to='/messages'>Messages</Link>
            </li>
            <li>
              <Link to='/help'>Help</Link>
            </li>
          </ul>
        ) : (
          ''
        )}
      </nav>
    </StyledHeader>
  );
};

export default Header;
