import React, { useEffect, useState } from "react";
import "./fuelFilter.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { setFuelFilter } from '../../actions/filterAction'
import { useDispatch, useSelector } from 'react-redux';
import Divider from "./divider";

function FuelFilter() {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedFuels, setSelectedFuels] = useState([]); 
  const filter = useSelector((state) => state.filters.fuel);
  const dispatch = useDispatch();

  const fuelOptions = [
    { label: "Petrol", value: 1 },
    { label: "Diesel", value: 2 },
    { label: "CNG", value: 3 },
    { label: "LPG", value: 4 },
    { label: "Electric", value: 5 },
    { label: "Hybrid", value: 6 },
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  const handleCheckboxChange = (value) => {
    const temp = [...filter];
    if (temp.includes(value)) {
      temp.splice(temp.indexOf(value), 1)
    } else {
      temp.push(value)
    }
    dispatch(setFuelFilter(temp))
  };

  return (
    <div>
      <div className="fuel-filter"  
      onClick={handleClick}
      >
        <div>Fuel</div>
        {isOpen ? (
          <IoIosArrowUp  />
        ) : (
          <IoIosArrowDown />
        )}
      </div>

      {isOpen && (
        <div className="fuel-filter-options">
          {fuelOptions.map((fuel, idx) => (
            <div key={idx} className="label-container">
              <input
                type="checkbox"
                id={fuel.label}
                name={fuel.label}
                value={fuel.value}
                checked={filter.includes(fuel.value)}
                onChange={() => handleCheckboxChange(fuel.value)}
              />
              <label htmlFor={fuel.label}>{fuel.label}</label>
            </div>
          ))}
        </div>
      )}
      <Divider />
    </div>
  );
}

export default FuelFilter;
