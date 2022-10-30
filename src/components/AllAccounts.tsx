import { IAccountModel } from "./models/Accounts Model";
import { ITransactionsModel } from "./models/TransactionsModel";

function MakeAll(a:IAccountModel[]) {

    const list = a.map((a) => (
            
  <div id={a.id.toString()} key={a.id}>
        <div>{a.nickname}</div>
        <div></div>
        <div>${a.balance}</div>
  </div>
    ))
  return (<div>{list}</div>);
    };
  
    export default MakeAll;