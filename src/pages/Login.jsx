import React, { useState } from "react";
// import "./FormStyles.css"; // Assuming you have a CSS file for shared form styles

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log("Login Submitted:", { email, password });
    };

    return (
        <main className="main">
            <div className="login-form">
                <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
                <form className="form form--login" onSubmit={handleSubmit}>
                    <div className="form__group">
                        <label className="form__label" htmlFor="email">Email address</label>
                        <input
                            id="email"
                            className="form__input"
                            type="email"
                            placeholder="you@example.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form__group ma-bt-md">
                        <label className="form__label" htmlFor="password">Password</label>
                        <input
                            id="password"
                            className="form__input"
                            type="password"
                            placeholder="••••••••"
                            required
                            minLength="8"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
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
