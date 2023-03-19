import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

export default function Expenses(props) {
  return (
    <Card className='expenses'>

      {props.items.map(item => (<ExpenseItem title={item.title} amount={item.amount} date={item.date} />))}
      
    </Card>
  );
}