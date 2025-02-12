import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router";
import { logoutUser } from "../rtk/features/AuthSlice";

const Header = () => {

    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    function logout() {
        dispatch(logoutUser())
    }

    return (
        <header className="header">
            <nav className="nav nav--tours">
                <Link to="/" className="nav__el">All tours</Link>
            </nav>
            <div className="header__logo">
                <img src="/img/logo-white.png" alt="Natours logo" />
            </div>
            <nav className="nav nav--user">
                {user ? (
                    <>
                        <button className="nav__el nav__el--logout" onClick={logout}>Log out</button>
                        <Link to="/account" className="nav__el">
                            <img
                                className="nav__user-img"
                                src={`/img/users/${user.photo}`}
                                alt="User photo"
                            />
                            <span>{user.name.split(" ")[0]}</span>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="nav__el">Login</Link>
                        <Link to="/sign-up" className="nav__el nav__el--cta">Sign up</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
