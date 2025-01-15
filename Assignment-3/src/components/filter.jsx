import React, { useState } from 'react'
import './filter.css'
import { CiFilter } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import BudgetFilter from './filter/budgetFilter';
import PriceRange from './filter/priceRange';
import FuelFilter from './filter/fuelFilter';
import { useDispatch } from 'react-redux';
import { clearAll } from '../actions/filterAction'

const Filters = () => {

  const dispatch = useDispatch()
  return (
    <div
      className='filter'
    >
      <div
        className='filter-header'
      >
        <div
          className='filter-title'
        >
          <CiFilter
            size={25}
          />
          <h3>Filters</h3>
        </div>
        <div
          style={{
            color: '#0979b6',
            cursor: 'pointer',
            fontSize: '16px',
          }}
          //  className='clear-all'
          onClick={() => {
            dispatch(clearAll())
          }}
        >
          Clear All
        </div>

      </div>
      <BudgetFilter />
      <FuelFilter />
    </div>

  )
}

export default Filters