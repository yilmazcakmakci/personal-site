import React from 'react'
import Layout from '../components/layout'

const CustomError = ({message}) => {
    return (
        <Layout>
            <h4 style={{color:'#10ac84'}}>OOPS!</h4>
            <p>{message}</p>
        </Layout>
    )
}

export default CustomError
