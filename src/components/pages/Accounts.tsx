import './Accounts.css';

const Accounts = () => {
  return (
  <main>
    <div>
      <h3>
        Accounts Page
      </h3>
    </div>

    <div className="accordion accordion-flush" id="accounts">

  <div className="accordion-item">
  
    <h2 className="accordion-header" id="account-name">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <div className='account-name'>Checking Account</div>
        <div className='balance'>
          Balance
        </div>
        <div className='balance-amount'>$100</div>
      </button>
    </h2>

    <div id="flush-collapseOne" className="collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className='transactions'>Transactions</div>
      <table className='table'>
        <thead>
          <tr className='userInfo-columns'>
          <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Sender/Reciever</th>
            <th scope="col">Message</th>
          </tr>
        </thead>

        <tbody className='table.striped'>
            <tr>
              <td>10-26-2022</td>
              <td className='transactions-add' id='add'> $100</td>
              <td>Yasin</td>
              <td>Test message</td>
            </tr>
            <tr>
              <td>10-26-2022</td>
              <td className='transactions-subtract' id='subtract'> $100</td>
              <td>Yasin</td>
              <td>Test message</td>
            </tr>
        </tbody>
      </table>
      </div>

  </div>

  <div className="accordion-item">

    <h2 className="accordion-header" id="account-name2">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Savings Account
        <div className='balance'>
            Balance
      </div>
      <div className='balance-amount'>$100</div>
      </button>
    </h2>

    <div id="flush-collapseTwo" className="collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div>
      <h4 className='transactions'>Transactions</h4>
      </div>
    </div>

  </div>
</div>
  </main>
  );
};

export default Accounts;
