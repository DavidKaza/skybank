import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../shared/hooks';
import { selectUser } from '../../shared/UserSlicer';
import MakeAll from '../AllAccounts';
import './Accounts.css';

const Accounts = () => {
  
  const User = useAppSelector(selectUser);
  const id = User.id; 

  const [accounts, setAccounts] = useState(<div>Loading</div>)
  useEffect(() => {
    axios.get(`/users/${id}/balance`)
    .then((response) => {
      setAccounts(MakeAll(response.data))
    })
  }, [])


  return (
  <main>
    <div>
      <h3>
        Accounts Page
      </h3>
    </div>
    <div>{accounts}</div>
  </main>
  );
};

export default Accounts;
