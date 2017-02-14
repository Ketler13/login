import React, { PropTypes } from 'react'

function ErrorPage(props) {
    return (
        <section>
            <h2>Error page</h2>
            <h3>{this.props.location.query.message}</h3>
        </section>
    )
}

ErrorPage.propTypes = {

}

export default ErrorPage
