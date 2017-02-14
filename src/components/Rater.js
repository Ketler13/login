import React, { Component, PropTypes } from 'react'
import FaStar from 'react-icons/lib/fa/star'
import FaStarO from 'react-icons/lib/fa/star-o'

function Rater(props) {
    let { rate, handleRate } = props
    let starRate
    if (handleRate) {
        starRate = ["","","","",""].map( (_, index) => {
            return (
                <li onClick = {props.handleRate(index + 1)} key = {index}>
                    {((index + 1) <= props.rate) ? <FaStar/> : <FaStarO />}
                </li>
               )
        })
    } else {
        if ( !rate || (rate < 1) ) rate = 1
        if ( rate > 5) rate = 5

        starRate = ["","","","",""].map( (_, index) => {
            return (
                <li key = {index}>
                    {((index + 1) <= rate) ? <FaStar/> : <FaStarO />}
                </li>
               )
        })
    }


    return <ul className = "rater">{starRate}</ul>
}

Rater.propTypes = {
    rate: PropTypes.number,
    handleRate: PropTypes.func
}

export default Rater
