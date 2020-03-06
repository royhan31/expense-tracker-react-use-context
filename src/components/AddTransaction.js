import React, {useState, useContext} from 'react';

import { GlobalContext } from './../context/GlobalState';

export const AddTransaction = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onStore = () => {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
    }
    if(text === ''){
      alert('Text not empty');
    }
    else if (amount === 0) {
      alert('Amount not zero');
    }else {
      addTransaction(newTransaction);
      setText('');
      setAmount('');
    }
  }

  return (
    <>
    <h3>Add new transaction</h3>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount">Amount <br/>
          (negative - expense, positive - income)</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount..." />
      </div>
      <button className="btn" onClick={onStore}>Add transaction</button>
  </>
  )
}
