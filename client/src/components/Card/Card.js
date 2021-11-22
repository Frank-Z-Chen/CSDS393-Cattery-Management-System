import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({title, imageUrl, body, button, url}) => {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imageUrl} alt=''/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
            </div>

            <div className="btn">
                <Link to={url}>
                <button>
                    <a>{button}</a>
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Card
