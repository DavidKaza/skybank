import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../shared/hooks";
import { selectUser } from "../../shared/UserSlicer";
import MakeAll from "../AllAccounts";
import Button from "../Button";
import Form from "../Form";

const StyledMain = styled.main`
h1 {
  padding: 20px;
  background-color: var(--primary);
  color: #fff;
}

.name {
  font-size: 30px;
  font-weight: bold;
}

.balance {
  font-size: 20px;
}

.accounts {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;
}

.all {
	width: 25%;
	text-align: center; 
	box-sizing: border-box;
}
`;

const Payments = () => {
  const User = useAppSelector(selectUser);
  const [transaction, setTransaction] = useState({
    amount: 0,
    sendingAccount: 0,
    receivingAccount: 0,
    message: ""
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [accounts, setAccounts] = useState
  (<div></div>)
  
  let userId = User.id

  let navigateProfile = useNavigate();

  function onSubmitTransfer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios.post(`http://localhost:8080/users/${userId}/transfer`,
    {
      amount: transaction.amount,
      sendingAccount: transaction.sendingAccount,
      receivingAccount: transaction.receivingAccount,
      message: transaction.message
    }, 
    {withCredentials: true})
    .then((response) => {
      console.log(response)
      navigateProfile('/Accounts')
    });
  }

  function handleTransferInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setTransaction({
      ...transaction,
      [e.target.name]: value,
    });
  }

  useEffect(() => {
    for (let field in transaction) {
      setButtonDisabled(false);
      if (!transaction[field as keyof typeof transaction]) {
        setButtonDisabled(true);
        break;
      }
    }
  }, [transaction]);

  useEffect(() => {
    axios.get(`http://localhost:8080/users/${userId}/balance`, { withCredentials: true })
    .then((response) => {
      console.log(response)
      setAccounts(MakeAll(response.data))
    })
  }, [])

  return (
  <StyledMain>
    <h1>Payments and Transfers Page</h1>
    {accounts}
    <Form method='post' onSubmit={onSubmitTransfer}>
    <label htmlFor='amount'>Amount</label>
      <input
        id='amount'
        value={transaction.amount}
        name='amount'
        type='number'
        onChange={handleTransferInputChange}
      ></input>
      <label htmlFor='sendingAccount'>From Account ID</label>
      <input
        id='sendingAccount'
        value={transaction.sendingAccount}
        name='sendingAccount'
        type='number'
        onChange={handleTransferInputChange}
      ></input>
      <label htmlFor='receivingAccount'>To Account ID</label>
      <input
        id='receivingAccount'
        value={transaction.receivingAccount}
        name='receivingAccount'
        type='number'
        onChange={handleTransferInputChange}
      ></input>
      <label htmlFor='message'>Message</label>
      <input
        id='message'
        value={transaction.message}
        name='message'
        type='text'
        onChange={handleTransferInputChange}
      ></input>
       <Button disabled={buttonDisabled ? true : false} className='span2'>
              Submit Transfer
        </Button>
    </Form>
  </StyledMain>
  );
};

export default Payments;
