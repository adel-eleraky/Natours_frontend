import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup"
import { registerUser } from "../rtk/features/AuthSlice";
const Signup = () => {

    const {user , errors} = useSelector(state => state.auth)


    const dispatch = useDispatch()
    // Validation schema using Yup
    const validationSchema = Yup.object({
        name: Yup.string().min(2, "Min is length is 2 Char").max(16, "Max length is 16 Char").required("Name is required"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least one letter and one number")
            .required("Password is required"),
        passwordConfirm: Yup.string().oneOf([Yup.ref("password")], "Confirm pass doesn't match password").required("Confirm password is required")
    });

    // Formik configuration
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            passwordConfirm: ""
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(registerUser(values))
        },
    });


    return (
        <main className="main">
            <div className="signup-form">
                <h2 className="heading-secondary ma-bt-lg">Sign up for an account</h2>
                <form className="form form--signup" onSubmit={formik.handleSubmit}>
                    <div className="form__group">
                        <label className="form__label" htmlFor="name">Your Name</label>
                        <input
                            id="name"
                            className="form__input"
                            type="text"
                            placeholder="John Doe"
                            {...formik.getFieldProps("name")}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <p className="form__error">{formik.errors.name}</p>
                        ) : null}
                    </div>
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
                            {...formik.getFieldProps("password")}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <p className="form__error">{formik.errors.password}</p>
                        ) : null}
                    </div>
                    <div className="form__group ma-bt-md">
                        <label className="form__label" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            className="form__input"
                            type="password"
                            placeholder="••••••••"
                            {...formik.getFieldProps("passwordConfirm")}
                        />
                        {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
                            <p className="form__error">{formik.errors.passwordConfirm}</p>
                        ) : null}
                    </div>
                    <div className="form__group">
                        <button className="btn btn--green" type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Signup;
