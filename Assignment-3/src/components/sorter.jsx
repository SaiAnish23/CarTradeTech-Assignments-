import React, { useState } from 'react';
import './Sorter.css';
import {setPriceSort} from '../actions/filterAction'
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


const Sorter = ({ onSort }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
  // const sortDirection = useSelector(state => state.sortDirection)
  // console.log("sortDirection", sortDirection)
  
  const sortOptions = [
    { label: 'Price: Low to High', value: 'asc' },
    { label: 'Price: High to Low', value: 'dsc' },
  ];

  const [selectedOption, setSelectedOption] = useState(sortOptions[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    dispatch(setPriceSort(option.value))
    setIsOpen(false);
    if (onSort) {
      onSort(option.value);
    }
  };

  return (
    <div className="sorter-container">
      <div className="dropdown-container">
        <button 
          className="dropdown-button" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption.label}
          <span> 
             
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

          </span>
        </button>
        
        {isOpen && (
          <div className="dropdown-menu">
            {sortOptions.map((option) => (
              <div
                key={option.value}
                className={`dropdown-item ${selectedOption.value === option.value ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="sorter-label">Sort By:</div>

    </div>
  );
};

export default Sorter;