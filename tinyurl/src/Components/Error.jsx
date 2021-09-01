import React from 'react'
import ErrorImg from '../Images/error_404_1.jpg'

function Error() {
    return (
        <div>
            <h1>Error 404 - I looked around but page not found!</h1>
            <img src={ErrorImg} alt="404" />
        </div>
    )
}

export default Error
