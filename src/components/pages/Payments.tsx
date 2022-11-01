import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../shared/hooks";
import { selectUser } from "../../shared/UserSlicer";
import Button from "../Button";
import Form from "../Form";

const StyledMain = styled.main`
h1 {
  padding: 20px;
  background-color: var(--primary);
  color: #fff;
}
`;

const Payments = () => {
  const User = useAppSelector(selectUser);
  const [transaction, setTransaction] = useState({
    amount: 0,
    sendingAccount: 0,
    recievingAccount: 0,
    message: ""
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  let userId = User.id

  function onSubmitTransfer() {
    axios.post(`http://localhost:8080/users/${userId}/transfer`,
    {
      amount: transaction.amount,
      sendingAccount: transaction.sendingAccount,
      recievingAccount: transaction.recievingAccount,
      message: transaction.message
    }, 
    {withCredentials: true})
    .then((response) => {
      console.log(response)
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

  return (
  <StyledMain>
    Payments and Transfers Page
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
      <label htmlFor='recievingAccount'>To Account ID</label>
      <input
        id='recievingAccount'
        value={transaction.sendingAccount}
        name='recievingAccount'
        type='number'
        onChange={handleTransferInputChange}
      ></input>
      <label htmlFor='note'>Message</label>
      <input
        id='note'
        value={transaction.sendingAccount}
        name='note'
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
