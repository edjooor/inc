import React from 'react';
import { Link } from 'react-router-dom';
import classes from './styles/HomeNetItem.module.css'


const HomeNetItem = (props) => {

    return (

        <Link to="/mint" className={classes.homenetItem}>
            
            {props.nethomeItem.title}
            
            <br/>
            
            {props.nethomeItem.body}
            
           

        </Link>
    )
}

export default HomeNetItem;