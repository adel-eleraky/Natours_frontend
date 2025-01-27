import React, { useState } from "react";
// import "./FormStyles.css"; // Reuse the same CSS for styling

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add signup logic here
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Signup Submitted:", { name, email, password });
    };

    return (
        <main className="main">
            <div className="signup-form">
                <h2 className="heading-secondary ma-bt-lg">Sign up for an account</h2>
                <form className="form form--signup" onSubmit={handleSubmit}>
                    <div className="form__group">
                        <label className="form__label" htmlFor="name">Your Name</label>
                        <input
                            id="name"
                            className="form__input"
                            type="text"
                            placeholder="John Doe"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
                    <div className="form__group ma-bt-md">
                        <label className="form__label" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            className="form__input"
                            type="password"
                            placeholder="••••••••"
                            required
                            minLength="8"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
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
