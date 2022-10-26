import axios from 'axios';
import React, { useState } from 'react';
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
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/login`, {
        username: data.username,
        password: data.password,
      })
      .then((resp) => {
        console.log(resp.status);
        console.log(resp.data);
      });
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  }

  return (
    <StyledMain>
      <h1>Welcome back!</h1>
      <section className='login-container'>
        <Form method='post' onSubmit={onSubmit}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            value={data.username}
            name='username'
            type='text'
            onChange={handleChange}
          />
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            value={data.password}
            name='password'
            type='password'
            onChange={handleChange}
          />
          <Button>Sign In</Button>
          <p>Not enrolled?</p>
          <Link to='/signup'>Signup Now</Link>
        </Form>
      </section>
    </StyledMain>
  );
};

export default SignIn;