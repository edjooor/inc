import React from "react";



import classes from './styles/MonkeyList.module.css'
import MonkeyItem from "./MonkeyItem";
const MonkeyList = ({ monkeyItems}) => {
    return (
        
        
           
            <div className={classes.monkeyList}>
            
            
            {monkeyItems.map((monkeyItem) =>
            
                <MonkeyItem  monkeyItem={monkeyItem} key={monkeyItem.id} />
            )}


       
        

        </div>
  
    );

};

export default MonkeyList;