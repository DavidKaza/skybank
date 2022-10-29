import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../shared/hooks';
import { selectUser } from '../../shared/UserSlicer';
import MakeAll from '../AllAccounts';
import getAll from '../AllTransactions';
import './Accounts.css';

const Accounts = () => {
  
  const User = useAppSelector(selectUser);
  const id = User.id; 

  const [accounts, setAccounts] = useState
  (<div>
    <div>
      <div>Checking Account</div>
      <div></div>
      <div>$100</div>
    </div>
  </div>
  )
  const [transactions, setTransactions] = useState
  (<div>
    <tbody>
      <div>
      <tr>
              <td className='date'>10-26-2022</td>
                <td className='amt'> $100</td>
                <td className='person'>Yasin</td>
              <td className='msg'>Test message</td>
              </tr>
      </div>
      </tbody>
</div>)

  useEffect(() => {
    axios.get(`/users/${id}/balance`)
    .then((response) => {
      setAccounts(MakeAll(response.data))
    })
  }, [])

  useEffect(() => {
    axios.get(`/users/${id}/transactions`)
    .then((response) => {
      setTransactions(getAll(response.data))
    })
  }, [])



  return (
  <main>
    <div>
      <h3>
        Accounts Page
      </h3>
    </div>
    <div>
    </div>
    <div>{accounts}</div>

    <div><h3>Transactions</h3></div>

    <div>
      <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Sender/Reciever</th>
            <th>Message</th>
          </tr>
        </thead>
      </table>
    </div>

    <tbody>
    {transactions}            
    </tbody>
    
      </div>
  </main>
  );
};

export default Accounts;
