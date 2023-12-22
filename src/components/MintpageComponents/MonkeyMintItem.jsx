import React from 'react';
import { Link } from 'react-router-dom';
import classes from './styles/MonkeyMintItem.module.css'


const MonkeyMintItem = (props) => {
    if (props.monkeysAmount >= props.monkeyMintItem.id) {
        return (
            <div className={classes.monkeyMintItemSelected}>
                <div className={classes.monkeyMintItemImg}>
                    <div className={classes.SelectedNFT}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
                            <path d="M2 4.5L5.97345 8L13.5 1.5" stroke="white" stroke-width="2" stroke-linecap="square" />
                        </svg>
                        <p className={classes.SelectedText}>Selected</p>
                    </div>

                </div>
                <div className={classes.monkeyName}>

                    {props.monkeyMintItem.title} #000
                    {props.monkeyMintItem.id}
                </div>

                <div className={classes.MonkeyNftMintPrice}>
                    <div style={{ display: "flex", flexDirection: 'column' }}>
                        <p className={classes.price}>Price:
                        </p>
                        <p className={classes.eth}>
                            {props.monkeyMintItem.price} ETH
                        </p>
                    </div >
                    <button className={classes.MintButton}>MINT</button>

                </div>



            </div>
        );
    }
    else {
        return (

            <div className={classes.monkeyMintItem}>
                <div className={classes.monkeyMintItemImg}>

                </div>
                <div className={classes.monkeyName}>

                    {props.monkeyMintItem.title} #000
                    {props.monkeyMintItem.id}
                </div>

                <div className={classes.MonkeyNftMintPrice}>
                    <div style={{ display: "flex", flexDirection: 'column' }}>
                        <p className={classes.price}>Price:
                        </p>
                        <p className={classes.eth}>
                            {props.monkeyMintItem.price} ETH
                        </p>
                    </div >
                    <button className={classes.MintButton}>MINT</button>

                </div>



            </div>
        );

    }


};

export default MonkeyMintItem;