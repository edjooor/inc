import React from "react";

import classes from './styles/QuantityWalletsStatistics.module.css';
import QuantityWalletsStatisticsItem from "./QuantityWalletsStatisticsItem";

const QuantityWalletsStatistics = ({QuantityStats}) => {
    return(
        <div>
              <p className={classes.Stwal}>
            STATISTICS<br/> QUANTITY WALLETS
            </p>
            
            <div className={classes.QuantWalStat}>
          
            {QuantityStats.map((QuantityStat) =>
            
            <QuantityWalletsStatisticsItem  QuantityStat={QuantityStat} key={QuantityStat.id} />
        )}

        </div>
        

        </div>
    );
};

export default QuantityWalletsStatistics;