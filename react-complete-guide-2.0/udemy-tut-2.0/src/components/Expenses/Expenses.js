import React, { useState } from 'react';

import './Expenses.css'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangedHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.data.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	

	return (
	 <li>
		<Card className="expenses">
			<ExpenseFilter 
				selected={filteredYear} 
				onChangedFilter={filterChangedHandler}
			/>
			<ExpensesChart expenses={filteredExpenses}/>
			<ExpensesList items={filteredExpenses} />	 	
		</Card>
	</li>
	);
};

export default Expenses;