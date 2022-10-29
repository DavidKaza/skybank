import { useState } from 'react';
import MakeAll from '../AllAccounts';
import './Accounts.css';

const Accounts = () => {

  const [accounts, setAccounts] = useState(<div>Loading</div>)


  return (
  <main>
    <div>
      <h3>
        Accounts Page
      </h3>
    </div>
    <div></div>
  </main>
  );
};

export default Accounts;
