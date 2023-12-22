import React, { Children } from "react";
import classes from './styles/ButtonCheck.module.css';

const ButtonCheck = ({children, ...props}) => {
    return(
        <button {...props} className={classes.buttonCheck}>
            {children} 

        </button>
    );
};

export default ButtonCheck;
