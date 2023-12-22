import React, { addEventListener, querySelector } from "react";
import classes from './styles/NetworkSelector.module.css'


function NetworkSelector({ options, defaultValue, value, onChange }) {

  return (



    <select className={classes.selector}
      value={value}
      onChange={event => onChange(event.target.value)}    >
      {/* <option   className={classes.optionSelect} value="No" >{defaultValue}</option> */}
      {options.map(option =>

        <option className={classes.optionSelect} key={option.value} value={option.value}>
    
              {option.name}
     




        </option>
      )}
    </select>
  );



}
export default NetworkSelector;