import React from "react";
import MonkeyMintItem from "./MonkeyMintItem";
import classes from './styles/MonkeyMintList.module.css'

const MonkeyMintList = ({ monkeyMintItems, monkeysAmount}) => {
        return (
            
            
               
                <div className={classes.MonkeyMintList}>
                

                {monkeyMintItems.map((monkeyMintItem) =>
                
                    <MonkeyMintItem  monkeyMintItem={monkeyMintItem} key={monkeyMintItem.id} monkeysAmount={monkeysAmount}/>
                )}
    
    
           
            
    
            </div>
        );
};

export default MonkeyMintList;