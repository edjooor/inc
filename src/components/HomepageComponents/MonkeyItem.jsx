import React from 'react';
import { Link } from 'react-router-dom';
import classes from './styles/MonkeyItem.module.css'


const MonkeyItem = (props) => {

    return (

        <Link to="/mint" className={classes.monkeyItem}>
            <div className={classes.monkeyItemImg}></div>

            {/* {props.monkeyItem.id} */}

        </Link>
    )
}

export default MonkeyItem;