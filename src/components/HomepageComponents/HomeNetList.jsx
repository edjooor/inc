import React from "react";



import classes from './styles/HomeNetList.module.css'

import HomeNetItem from "./HomeNetItem";
const HomeNetList = ({ nethomeItems}) => {
    return (
        <div className={classes.generalHomeNetList}>
             <div className={classes.textHomeNetList}>
            Mint NFTs and receive unique contracts + transactions
            </div>
        <div className={classes.homenetList}>
            
            
            {nethomeItems.map((nethomeItem) =>
            
                <HomeNetItem  nethomeItem={nethomeItem} key={nethomeItem.id} />
            )}

                </div>
        </div>
  
    );

};

export default HomeNetList;