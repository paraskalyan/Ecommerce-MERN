import React, { useEffect } from 'react'
import { useUserStore } from '../stores/useUserStore'
import { Navigate } from 'react-router';
import PageLoader from './PageLoader';

const ProtectedRoute = ({ children }) => {
    const { user, checkAuth, loading } = useUserStore()

    useEffect(() => {
        checkAuth()
    }, [checkAuth]);
    if (!user) return <Navigate to='/login' />
    console.log(loading, user)
    if (loading) return <PageLoader />
    return children
}

export default ProtectedRoute