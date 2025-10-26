import { useState } from 'react'
import { useAuthHook } from '../hooks/authHook';
import AuthInput from '../components/AuthInput'
import SubmitButton from '../components/SubmitButton';

export default function Signup(){

    const [creatingAdmin, setCreatingAdmin ] = useState('boolean')

    const { email, password, rememberMe ,handleEmailChange, handlePasswordChange } = useAuthHook();
    const [confirmPassword, setConfirmPassword] = useState(''); // Additional state for the confirm password input
    
    
    //Turn into a separate hook later
    const [error, setError] = useState(''); // State if there are error messages

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (error) {
            setError(''); 
        }
    };

    /**
     * Handles the form submission event.
     * Validates that passwords match before proceeding.
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        setError(''); // Clear previous errors
 
        if (password !== confirmPassword) { // Check if the passwords match
            setError('Passwords do not match. Please try again.'); 
            console.error(errorMsg);
            return;
        }

        // Handle the API Call here
        console.log('Attempting to setup account with:', { email, password });
        // Like callApi.createAdmin({ email, password });
    };

    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">
                {/* Center the column */}
                <div className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto">
                    {/* Card with shadow and rounded corners, matching Login.jsx style */}
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-4 p-sm-5">
                            <h2 className="card-title text-center mb-4 fw-bold">Create Admin Account</h2>

                            {/* Use noValidate to allow custom validation feedback */}
                            <form onSubmit={handleSubmit} noValidate>

                                {/* Email Input */}
                                <AuthInput
                                    label="Email address"
                                    type="email"
                                    id="setupEmail"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required={true}
                                />

                                {/* Password Input */}
                                <AuthInput
                                    label="Password"
                                    type="password"
                                    id="setupPassword"
                                    placeholder="Create a password"
                                    value={password} 
                                    onChange={handlePasswordChange}
                                    required={true}
                                />

                                {/* Confirm Password Input */}
                                <AuthInput
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm your password"
                                    value={confirmPassword} 
                                    onChange={handleConfirmPasswordChange}
                                    required={true}
                                />

                                {/* MAKE THIS USE A HOOK AND COMPONENT TO REUSE */}
                                {/* Error Message Display */}
                                {error && (
                                    <div className="alert alert-danger small p-2" role="alert">
                                        {error}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <SubmitButton text="Sign Up" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}