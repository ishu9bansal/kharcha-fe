import React, { useState } from 'react';
import { CATEGORY, PAYMENT_MODE, RECIPIENT } from '../constants';

const ExpenseForm = ({ onSaveExpense }) => {
  const CATEGORIES = Object.values(CATEGORY);
  const PAYMENT_MODES = Object.values(PAYMENT_MODE);
  const RECIPIENTS = Object.values(RECIPIENT);

  const today = new Date().toJSON().split('T')[0];
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [timestamp, setTimestamp] = useState(today);
  const [category, setCategory] = useState('');
  const [paymentMode, setPaymentMode] = useState(PAYMENT_MODE.CREDIT);
  const [recipient, setRecipient] = useState(RECIPIENT.SELF);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      title,
      amount,
      timestamp,
      category,
      paymentMode,
      recipient,
    };
    onSaveExpense(expense);
    
    // Reset form
    setTitle('');
    setAmount('');
    setTimestamp(today);
    setCategory('');
    setPaymentMode(PAYMENT_MODE.CREDIT);
    setRecipient(RECIPIENT.SELF);
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>Title </label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        <br />
        <label>Amount </label>
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} required />
        <br />
        <label>Date </label>
        <input type="date" value={timestamp} onChange={e => setTimestamp(e.target.value)} required />
        <br />
        <label>Category </label>
        <select value={category} onChange={e => setCategory(e.target.value)} required >
          <option value="">Select</option>
          {CATEGORIES.map((category) => <option key={category} value={category}>{category}</option>)}
        </select>
        <br />
        <label>Payment Mode </label>
        <select value={paymentMode} onChange={e => setPaymentMode(e.target.value)} required >
          {PAYMENT_MODES.map((mode) => <option key={mode} value={mode}>{mode}</option>)}
        </select>
        <br />
        <label>Recipient </label>
        <select value={recipient} onChange={e => setRecipient(e.target.value)} required >
          {RECIPIENTS.map((recipient) => <option key={recipient} value={recipient}>{recipient}</option>)}
        </select>
        <br />
        <button type="submit">Save</button>
      </form>
  );
};

export default ExpenseForm;