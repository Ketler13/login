import React, {PropTypes} from 'react'
import FaStar from 'react-icons/lib/fa/star'
import FaStarO from 'react-icons/lib/fa/star-o'

function Rater(props) {
    let { rate } = props

    if ( !rate || (rate < 1) ) rate = 1
    if ( rate > 5) rate = 5

    const starRate = ["","","","",""].map( (_, index) => {
        return (
            <li key = {index}>
                {((index + 1) <= rate) ? <FaStar/> : <FaStarO />}
            </li>
           )
    })

    return <ul className = "rater">{starRate}</ul>

}

Rater.propTypes = {
    rate: PropTypes.number
}

export default Rater
