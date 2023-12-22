import React from "react";
import classes from './styles/WalletInput.module.css'

const WalletInput = React.forwardRef((props, ref) => {
    return(
        <input ref={ref} {...props} className={classes.walletInput}/>
    );
});

export default WalletInput;