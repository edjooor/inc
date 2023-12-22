import React from "react";

import classes from './styles/SelectedNetworkImg.module.css';

const SelectedNetworkImg = ({selectedNetwork}) =>{
    if (selectedNetwork==='Zksync'){
        return(
            <div className={classes.ZkSyncImg}>

            </div>
        );

    }
    else if(selectedNetwork==='Starknet')
    {
        return(
            <div className={classes.StarknetImg}>

            </div>
        );

    }
    else if(selectedNetwork==='Scroll')
    {
        return(
            <div className={classes.ScrollImg}>

            </div>
        );

    }
    else if(selectedNetwork==='Linea')
    {
        return(
            <div className={classes.LineaImg}>

            </div>
        );

    }
    else if(selectedNetwork==='Zora')
    {
        return(
            <div className={classes.ZoraImg}>

            </div>
        );

    }
    else if(selectedNetwork==='Base')
    {
        return(
            <div className={classes.BaseImg}>

            </div>
        );

    }

};

export default SelectedNetworkImg;