import React, { useState } from 'react'
import './priceRange.css'

import { setBudgetFilter } from '../../actions/filterAction'
import { useDispatch, useSelector } from 'react-redux';
 

function PriceRange() {

  const [range, setRange] = useState({ min: 0, max: 20 });
  const maxi = 20;
  const dispatch = useDispatch()
  const value = useSelector(state => state.filters.budget)
  console.log(value)

  const handleMinChange = (e) => {
    const newMin = Math.min(Number(e.target.value), range.max);
    setRange(prev => ({ ...prev, min: newMin }));
    dispatch(setBudgetFilter({ min: newMin, max: range.max }))
  };

  const handleMaxChange = (e) => {
    const newMax = Math.max(Number(e.target.value), range.min);
    setRange(prev => ({ ...prev, max: newMax }));
    dispatch(setBudgetFilter({ min: range.min, max: newMax }))
  };

  return (
    <>
      <div className="slider-container">
        <div className="range-labels">
          <span>Any</span>
          <span>{maxi}+ Lakh</span>
        </div>

        <div className="input-fields">
          <input
            type="number"
            value={range.min}
            onChange={handleMinChange}
            min={0}
            max={range.max}
            className="number-input"
          />
          <span className="separator">-</span>
          <input
            type="number"
            value={range.max}
            onChange={handleMaxChange}
            min={range.min}
            max={maxi}
            className="number-input"
          />
        </div>
      </div>
    </>
  )
}

export default PriceRange