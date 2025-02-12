import React, { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router'

function UnAuthRoute() {


    const {user} = useSelector(state => state.auth)

    if(user) return <Navigate to="/account" replace="true" />
    
    return (
        <Outlet />
    )
    
}

export default UnAuthRoute
