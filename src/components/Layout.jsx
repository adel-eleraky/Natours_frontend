import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RotateSpinner } from "react-spinners-kit"
import { fetchTours } from "../rtk/features/TourSlice";

const Layout = ({ title, alert, children }) => {

    const dispatch = useDispatch()
    let [loading, setLoading] = useState(true)


    useEffect(() => {
        dispatch(fetchTours()).then(() => setLoading(false))
    }, [])

    if (loading) {
        return (
            <div className='vh-100 d-flex justify-content-center align-items-center'>
                <RotateSpinner size={100} color="#55c57a" loading={loading} />
            </div>
        )
    }
    
    return (
        <div data-alert={alert || ""}>
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        </div>
    );
};

export default Layout;
