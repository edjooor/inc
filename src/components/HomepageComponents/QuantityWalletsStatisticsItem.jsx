import React from "react";

import classes from './styles/QuantityWalletsStatisticsItem.module.css';

const QuantityWalletsStatisticsItem = (props) => {
    return(
        <div className={classes.QuanWalItem}>
            <p>
            {props.QuantityStat.title}
            </p>
            
            <hr className={classes.stripe}/>
            <p>
            {props.QuantityStat.amount} 

            </p>
 


        </div>
    );
};

export default QuantityWalletsStatisticsItem;