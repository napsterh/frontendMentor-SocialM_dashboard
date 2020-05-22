import React from 'react'
import './card.css'

function Card(props){

    const className = `card ${props.name}`
    return (
        <article className={className}>
            <p className="card-title">
                <img src={props.icon} alt=""/>
                {props.username}
            </p>
            <p className="card-followers">
                <span className="card-followers-number">{props.followers}</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
                <img src="images/icon-up.svg" alt=""/>
                    {props.todayFollowers} Today
            </p>
        </article>
    );
}

export default Card