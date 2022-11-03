import * as React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../shared/hooks';
import { selectUser, setDefault } from '../shared/UserSlicer';
import Button from './Button';
import DayNight from './daynight.svg';
import { selecDayNightSlice, setMode } from '../shared/ThemeSlicer';

export const StyledHeader = styled.header`
  background-color: var(--color1);
  position: sticky;
  top: 0;
  transition: all 0.4s;
  nav {
    color: var(--textColor3);
    div.upperNav {
      padding: 5px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style-type: none;
      a:hover {
        color: var(--textColor1);
      }
      #dayNightSwitcherBtn {
        border: none;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: transparent;
        overflow: hidden;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: var(--icon-position);
          transition: all 0.5s;
        }
      }

      div {
        display: flex;
        align-items: center;
        a {
          padding: 10px;
          text-decoration: none;
          color: var(--textColor2);
          transition: color 0.4s;
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
            color: var(--textColor2);
            transition: color 0.4s;
          }
          button {
            font-size: 1rem;
            width: auto;
            background: transparent;
            color: var(--textColor2);
            transition: color 0.4s;
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
      background-color: var(--color2);
      transition: all 0.4s;
      li {
        a {
          color: var(--textColor1);
          text-decoration: none;
        }
      }
    }
  }
`;

const Header: React.FC = () => {
  const user = useAppSelector(selectUser);
  const theme = useAppSelector(selecDayNightSlice);
  const [themeState, setThemeState] = React.useState(theme);

  const dispatch = useAppDispatch();
  let navigateHome = useNavigate();

  const toggleDayNight = () => {
    dispatch(setMode(!themeState));
    setThemeState(!themeState);
    console.log(theme);

    if (!themeState) {
      document.documentElement.style.setProperty('--color1', '#f0f9ff');
      document.documentElement.style.setProperty('--color2', '#a4c8eb');
      document.documentElement.style.setProperty('--color3', '#5793cf');
      document.documentElement.style.setProperty('--textColor1', '#000');
      document.documentElement.style.setProperty('--textColor2', '#006EA5');
      document.documentElement.style.setProperty('--textcolor3', '#edf6ff');
      document.documentElement.style.setProperty('--icon-position', 'right');
    } else {
      document.documentElement.style.setProperty('--color1', '#1e2427');
      document.documentElement.style.setProperty('--color2', '#623d26');
      document.documentElement.style.setProperty('--color3', '#95631e');
      document.documentElement.style.setProperty('--textColor1', '#ffffff');
      document.documentElement.style.setProperty('--textColor2', '#e1dd74');
      document.documentElement.style.setProperty('--textcolor3', '#000000');
      document.documentElement.style.setProperty('--icon-position', 'left');
    }
  };

  return (
    <StyledHeader>
      <nav>
        <div className='upperNav'>
          <div>
            <div className='Logo'>
              <Link to='/'>SkyNet</Link>
            </div>
            <button id='dayNightSwitcherBtn' onClick={toggleDayNight}>
              <img src={DayNight} alt='day and night mode switcher' />
            </button>
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
                      localStorage.removeItem('user');
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
