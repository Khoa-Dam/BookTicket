import React, { useState } from 'react';
import './style.scss'; // Assuming you will create a separate SCSS file for styles

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        console.log({ name, email, password, agreedToTerms });
        // Add your registration logic here (e.g., API call)
    };

    return (
        <div className="signup text-xl">
            <div className="signup__content">
                <h1 className="signup__heading">Sign up</h1>
                <h2 className="signup__caption">Sign up with</h2>
                <div className="signup-social">
                    <div className="signup-social__item">
                        <i className="fab fa-google signup-social__icon"></i>
                        <span className="signup-social__text">Sign up with Google</span>
                    </div>
                    <div className="signup-social__item">
                        <i className="fab fa-facebook signup-social__icon"></i>
                        <span className="signup-social__text">Sign up with Facebook</span>
                    </div>
                </div>
                <form className="signup-form" onSubmit={handleSubmit} autoComplete="off">
                    <div className="signup-form__row">
                        <div className="signup-form__group">
                            <label htmlFor="name" className="signup-form__label">Name</label>
                            <div className="signup-form__validate">
                                <input
                                    type="text"
                                    className="signup-form__input"
                                    id="name"
                                    required
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} // Handle input change
                                />
                                <div className="signup-form__check">
                                    <i className="fa fa-check"></i>
                                </div>
                            </div>
                        </div>
                        <div className="signup-form__group">
                            <label htmlFor="email" className="signup-form__label">Email</label>
                            <input
                                type="email"
                                className="signup-form__input"
                                id="email"
                                required
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Handle input change
                            />
                        </div>
                    </div>
                    <div className="signup-form__group">
                        <label htmlFor="password" className="signup-form__label">Password</label>
                        <input
                            type="password"
                            className="signup-form__input"
                            id="password"
                            required
                            minLength={10} // Changed from "10" to 10
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Handle input change
                        />
                    </div>
                    <div className="signup-form__term">
                        <input
                            type="checkbox"
                            id="term"
                            checked={agreedToTerms}
                            onChange={() => setAgreedToTerms(!agreedToTerms)} // Handle checkbox change
                        />
                        <label htmlFor="term" className="signup__label">I have read and agree with terms</label>
                    </div>
                    <button className="signup-form__submit" type="submit">
                        <i className="fa fa-arrow-right"></i>
                    </button>
                    <p className="signup__already">Already had an Account? <a href="#">Sign in</a></p>
                </form>
            </div>
            <div className="signup__image bg-cover">
                <img
                    src="https://i.pinimg.com/564x/96/84/2e/96842ecb986d338c3a59a1e631f6a7c8.jpg"
                    alt="Sign up"
                />
            </div>
        </div>
    );
};

export default Register;
