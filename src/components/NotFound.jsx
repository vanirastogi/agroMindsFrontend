import React from 'react'
import notFoundImage from "../assets/images/notfound.png"

const NotFound = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center'
        }}>
            <img src={notFoundImage} alt="notFound" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    )
}

export default NotFound
