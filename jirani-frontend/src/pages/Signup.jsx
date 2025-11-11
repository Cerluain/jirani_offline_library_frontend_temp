import { useState } from 'react'
import { useAuthHook } from '../hooks/authHook';
import AuthInput from '../components/AuthInput'
import SubmitButton from '../components/SubmitButton';
import Notification from '../components/Notification'

export default function Signup() {

    const [creatingAdmin, setCreatingAdmin] = useState('boolean')

    const { username, password, rememberMe, handleUsernameChange, handlePasswordChange } = useAuthHook();
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
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Clear previous errors

        if (!username || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            // Make the API request to create a new user account
            const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                window.location.href = '/profile';
            } else {
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (error) {
            console.error('Error during account creation:', error);
            setError('An error occurred during account creation');
        }

        if (password !== confirmPassword) { // Check if the passwords match
            setError('Passwords do not match. Please try again.');
            console.error(errorMsg);
            return;
        }

        // Handle the API Call here
        console.log('Attempting to setup account with:', { username, password });
        // Like callApi.createAdmin({ username, password });
    };

    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">
                {/* Center the column */}
                <div className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto">
                    <Notification message={error} onDismiss={() => setError('')} />
                    {/* Card with shadow and rounded corners, matching Login.jsx style */}
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-4 p-sm-5">
                            <h2 className="card-title text-center mb-4 fw-bold">Create Admin Account</h2>

                            {/* Use noValidate to allow custom validation feedback */}
                            <form onSubmit={handleSubmit} noValidate>

                                {/* Username Input */}
                                <AuthInput
                                    label="Username address"
                                    type="username"
                                    id="setupUsername"
                                    placeholder="Username"
                                    value={username}
                                    onChange={handleUsernameChange}
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