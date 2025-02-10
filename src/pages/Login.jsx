import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup"
import "./css/login.css"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // Validation schema using Yup
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
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
            console.log("Login Submitted:", values);
            // Dispatch login action or API request here
        },
    });


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Add login logic here
    //     console.log("Login Submitted:", { email, password });
    // };

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
                    </div>
                    <div className="form__group">
                        <button className="btn btn--green" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Login;
