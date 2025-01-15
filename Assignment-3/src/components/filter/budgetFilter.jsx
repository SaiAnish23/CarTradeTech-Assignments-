import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { setBudgetFilter } from '../../actions/filterAction';
import { useDispatch , useSelector } from 'react-redux';
import   './budgetFilter.css';
import PriceRange from './priceRange';
import Divider from './divider';

const BudgetFilter = () => {
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const  budget = useSelector(state => state.filters.budget);
  console.log("budget", budget);

  function handleClick() {
    setOpen(!open);
  }

  const budgetRanges = [
    { id: 1, label: 'Below ₹ 3 Lakh', value: {min: 0, max: 3} },
    { id: 2, label: '₹ 3-5 Lakh', value: {min: 3, max: 5} },
    { id: 3, label: '₹ 5-8 Lakh', value: {min: 5, max: 8} },
    { id: 4, label: '₹ 8-12 Lakh', value: {min: 8, max: 12} },
    { id: 5, label: '₹ 12-20 Lakh', value: {min: 12, max: 20} },
    { id: 6, label: '₹ 20 Lakh +', value: {min: 20, max: 100} },
  ];

  const handleBudgetClick = (value) => {
    setSelectedBudget(value);
    console.log("value", value);
    dispatch(setBudgetFilter(value));
    // console.log("value1", value);
  };

  return (
    <div className="budget-filter-container">
      <div className="budget-header" 
      onClick={handleClick}
      >
        <div className="budget-title">
          Budget (Lakhs)
        </div>
        {open ? (
          <IoIosArrowUp  />
        ) : (
          <IoIosArrowDown  />
        )}
      </div>

      {open && (
        <div>
        <div className="budget-options">
          {budgetRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => handleBudgetClick(range.value)}
              className={`budget-button ${((budget.min === range.value.min ) && (budget.max === range.value.max )) ? 'selected' : ''}`}

            >
              {range.label}
            </button>
          ))}
        </div>
         <PriceRange />
        </div>

      )}
       
      <Divider />

    </div>
  );
};

export default BudgetFilter;