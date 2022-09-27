import React from 'react'

const Authentication = (token) => {
    if( token.length > 3) {
        return true
    }else{
        return false
    }
}

export default ( Authentication );