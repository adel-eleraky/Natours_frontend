import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup"
import "./css/login.css"
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../rtk/features/AuthSlice";
import { Navigate, useNavigate } from "react-router";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { status, message, user, errors, token } = useSelector(state => state.auth)


    // Validation schema using Yup
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least one letter and one number")
            .required("Password is required"),
    });

    // Formik configuration
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values) => {
            // Dispatch login action or API request here
            dispatch(loginUser(values))
        },
    });

    return (
        <main className="main">
            <div className="login-form">
                <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
                <form className="form form--login" onSubmit={formik.handleSubmit}>
                    <div className="form__group">
                        <label className="form__label" htmlFor="email">Email address</label>
                        <input
                            id="email"
                            className="form__input"
                            type="email"
                            placeholder="you@example.com"
                            {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <p className="form__error">{formik.errors.email}</p>
                        ) : null}
                        {errors?.email ?
                            <p className="form__error">{errors?.email}</p>
                            : null}
                    </div>
                    <div className="form__group ma-bt-md">
                        <label className="form__label" htmlFor="password">Password</label>
                        <input
                            id="password"
                            className="form__input"
                            type="password"
                            placeholder="••••••••"
                            minLength="8"
                            {...formik.getFieldProps("password")}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <p className="form__error">{formik.errors.password}</p>
                        ) : null}
                        {errors?.password ?
                            <p className="form__error">{errors?.password}</p>
                            : null}
                    </div>
                    <div className="form__group">
                        <button className="btn btn--green" type="submit">Login</button>
                    </div>
                </form>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </main>

    );
};

export default Login;
