import { IAccountModel } from "./models/Accounts Model";

function MakeAll(a:IAccountModel[]) {

    const list = a.map((a) => (
            
        <div key={a.id}>
            <div>
        <div>{a.nickname}</div>
        <div></div>
        <div>{a.balance}</div>
      </div>
  
      <div><h4>Transactions</h4></div>
  
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
    
            <tbody>
                <tr>
                  <td className='date'>10-26-2022</td>
                  <td className='amt'> $100</td>
                  <td className='person'>Yasin</td>
                  <td className='msg'>Test message</td>
                </tr>
            </tbody>
        </table>
      </div>
        </div>
    ))
  return (<div>{list}</div>);
    };
  
    export default MakeAll;