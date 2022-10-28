import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../shared/hooks';
import { selectUser } from '../../shared/UserSlicer';
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
  .openaccount-container {
    min-height: calc(100vh - 350px);
    display: grid;
    align-items: center;
    justify-content: center;
  }
`;

const OpenAccount = () => {
  const [accountData, setAccountData] = useState({
    accountType: '',
    nickname: '',
    initialDeposit: '',
  });

  const [userData, setUserData] = useState({
    firstName: '',
    middleInitial: '',
    lastName: '',
    ssn: '',
    email: '',
    phoneNumber: '',
    country: '',
    state: '',
    city: '',
    zipcode: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  let navigateProfile = useNavigate();
  const user = useAppSelector(selectUser);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/users/${user.id}/accounts`, {
        accountType: accountData.accountType,
        nickname: accountData.nickname,
        initialDeposit: accountData.initialDeposit,
      })
      .then((resp) => {
        console.log(resp.data);
        navigateProfile('/Profile');
      });
  }
  function handleAccountInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setAccountData({
      ...accountData,
      [e.target.name]: value,
    });
  }
  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setAccountData({
      ...accountData,
      [e.target.name]: value,
    });
  }

  function handleUserInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setUserData({
      ...userData,
      [e.target.name]: value,
    });
  }

  return (
    <StyledMain>
      <h1>Let's create a new SkyBank Account</h1>
      <section className='openaccount-container'>
        {user.id ? (
          <p>Choose an account type, nickname and initial deposit amount.</p>
        ) : (
          <p>Joining SkyBank is as easy as filling out the form below.</p>
        )}
        {user.id ? (
          <Form method='post' onSubmit={onSubmit}>
            <label htmlFor='accountType'>Account Type</label>
            <select onChange={handleSelectChange} name='accountType'>
              <option value='checking'>Checking</option>
              <option value='saving'>Saving</option>
            </select>
            <label htmlFor='nickname'>Nickname</label>
            <input
              id='nickname'
              value={accountData.nickname}
              name='nickname'
              type='text'
              onChange={handleAccountInputChange}
            ></input>
            <label htmlFor='initialDeposit'>Initial deposit</label>
            <input
              id='initialDeposit'
              value={accountData.initialDeposit}
              name='initialDeposit'
              type='number'
              onChange={handleAccountInputChange}
            ></input>
            {!user.id && (
              <p>
                Already a member? <Link to='/signin'>Sign In</Link>
              </p>
            )}
            <Button>{!user.id ? 'Next' : 'Create'}</Button>
          </Form>
        ) : (
          <Form className='grid-2col'>
            <div>
              <label htmlFor='firstName'>First Name</label>
              <input
                value={userData.firstName}
                id='firstName'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              <label htmlFor='middleInitial'>Middle Initial</label>
              <input
                value={userData.middleInitial}
                id='middleInitial'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              <label htmlFor='lastName'>Last Name</label>
              <input
                value={userData.lastName}
                id='lastName'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              <label htmlFor='ssn'>
                <span title='Social Security Number'>SSN</span> or{' '}
                <span title='Tax ID Number'>TIN</span>
              </label>
              <input
                value={userData.ssn}
                id='ssn'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                value={userData.email}
                id='email'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              <label htmlFor='phone'>Phone Number</label>
              <input
                value={userData.phoneNumber}
                id='phone'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              <label htmlFor='country'>country</label>
              <input
                value={userData.country}
                id='country'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              {' '}
              <label htmlFor='state'>State</label>
              <input
                value={userData.state}
                id='state'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              <label htmlFor='city'>City</label>
              <input
                value={userData.city}
                id='city'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div>
              <label htmlFor='zipcode'>Zipcode</label>
              <input
                value={userData.zipcode}
                id='zipcode'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div className='span2'>
              <label htmlFor='username'>Username</label>
              <input
                value={userData.username}
                id='username'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>
            <div className='span2'>
              <label htmlFor='password'>Password</label>
              <input
                value={userData.password}
                id='password'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>

            <div className='span2'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                value={userData.confirmPassword}
                id='confirmPassword'
                type='text'
                onChange={handleUserInputChange}
              />
            </div>

            <Button className='span2'>Next</Button>
          </Form>
        )}
      </section>
    </StyledMain>
  );
};

export default OpenAccount;
