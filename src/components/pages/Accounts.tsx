import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../shared/hooks';
import { selectUser } from '../../shared/UserSlicer';
import MakeAll from '../AllAccounts';
import getAll from '../AllTransactions';


const StyledMain = styled.main`
h1 {
  padding: 20px;
  background-color: var(--primary);
  color: #fff;
}
.table {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  text-align: center;
  border: 1px solid;
}
th {
  width: 25%;
}

.columns {
  background-color: #1b87ed;
}


tr:nth-child(even) {
  background-color: #C0C0C0;
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
}

.all {
  width: 25%;
	text-align: center; 
	box-sizing: border-box;
}
`;

const Accounts = () => {
  
  const User = useAppSelector(selectUser);
  const id = User.id; 

  const [accounts, setAccounts] = useState
  (<div></div>)
  const [transactions, setTransactions] = useState(<tbody></tbody>)

  useEffect(() => {
    axios.get(`http://localhost:8080/users/${id}/balance`, { withCredentials: true })
    .then((response) => {
      console.log(response)
      setAccounts(MakeAll(response.data))
    })
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:8080/users/${id}/transactions`, { withCredentials: true })
    .then((response) => {
      console.log(response)
      setTransactions(getAll(response.data))
    })
  }, [])



  return (
  <StyledMain>
    <div>
      <h1>Accounts Page</h1>
    </div>

    {accounts}

    <div><h3>Transfers</h3></div>

    <div>
      <table className='table'>
        <thead>
          <tr className='columns'>
            <th>Date</th>
            <th>Amount</th>
            <th>Sender/Reciever</th>
            <th>Message</th>
          </tr>
        </thead>
        {transactions}    
      </table>
    </div>

  </StyledMain>
  );
};

export default Accounts;
