import React, { useState } from "react";
import NavElement from "../components/NavElement";
import { useSelector } from "react-redux";

const Account = () => {

    const {user} = useSelector(state => state.auth)
    
    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [photo, setPhoto] = useState(user?.photo);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

    return (
        <main className="main">
            <div className="user-view">
                {/* Sidebar Navigation */}
                <nav className="user-view__menu">
                    <ul className="side-nav">
                        <NavElement href="#" icon="settings" name="Settings" active />
                        <NavElement href="/my-tours" icon="briefcase" name="My bookings" />
                        <NavElement href="#" icon="star" name="My reviews" />
                        <NavElement href="#" icon="credit-card" name="Billing" />
                    </ul>

                    {user?.role === "admin" && (
                        <div className="admin-nav">
                            <h5 className="admin-nav__heading">Admin</h5>
                            <ul className="side-nav">
                                <NavElement href="#" icon="map" name="Manage tours" />
                                <NavElement href="#" icon="user" name="Manage users" />
                                <NavElement href="#" icon="star" name="Manage reviews" />
                                <NavElement href="#" icon="briefcase" name="Manage briefcase" />
                            </ul>
                        </div>
                    )}
                </nav>

                {/* User Account Forms */}
                <div className="user-view__content">
                    {/* Account Settings Form */}
                    <div className="user-view__form-container">
                        <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
                        <form className="form form-user-data">
                            <div className="form__group">
                                <label className="form__label" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    className="form__input"
                                    type="text"
                                    value={name}
                                    required
                                    name="name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="form__group ma-bt-md">
                                <label className="form__label" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    className="form__input"
                                    type="email"
                                    value={email}
                                    required
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="form__group form__photo-upload">
                                <img className="form__user-photo" src={`/img/users/${photo}`} alt="User photo" />
                                <input
                                    className="form__upload"
                                    type="file"
                                    accept="image/*"
                                    id="photo"
                                    name="photo"
                                    onChange={(e) => setPhoto(e.target.files[0])}
                                />
                                <label htmlFor="photo">Choose new image</label>
                            </div>

                            <div className="form__group right">
                                <button className="btn btn--small btn--green" type="submit">
                                    Save settings
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="line">&nbsp;</div>

                    {/* Password Change Form */}
                    <div className="user-view__form-container">
                        <h2 className="heading-secondary ma-bt-md">Password change</h2>
                        <form className="form form-user-settings">
                            <div className="form__group">
                                <label className="form__label" htmlFor="password-current">
                                    Current password
                                </label>
                                <input
                                    id="password-current"
                                    className="form__input"
                                    type="password"
                                    placeholder="••••••••"
                                    required
                                    minLength="8"
                                    name="oldPassword"
                                    onChange={(e) => setOldPassword(e.target.value)}
                                />
                            </div>

                            <div className="form__group">
                                <label className="form__label" htmlFor="password">
                                    New password
                                </label>
                                <input
                                    id="password"
                                    className="form__input"
                                    type="password"
                                    placeholder="••••••••"
                                    required
                                    minLength="8"
                                    name="newPassword"
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>

                            <div className="form__group ma-bt-lg">
                                <label className="form__label" htmlFor="password-confirm">
                                    Confirm password
                                </label>
                                <input
                                    id="password-confirm"
                                    className="form__input"
                                    type="password"
                                    placeholder="••••••••"
                                    required
                                    minLength="8"
                                    name="newPasswordConfirm"
                                    onChange={(e) => setNewPasswordConfirm(e.target.value)}
                                />
                            </div>

                            <div className="form__group right">
                                <button className="btn btn--small btn--green btn--save-password" type="submit">
                                    Save password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Account;
