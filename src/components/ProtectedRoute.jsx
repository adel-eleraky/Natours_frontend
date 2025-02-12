import React, { useEffect, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router'

function ProtectedRoute() {

    const { user } = useSelector(state => state.auth)

    if(!user) return <Navigate to="/login" replace="true" />

    return (
        <Outlet />
    )
}

export default ProtectedRoute
