import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer/Footer'

export const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
