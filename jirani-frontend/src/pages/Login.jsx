import { useAuthHook } from '../hooks/authHook';
import AuthInput from '../components/AuthInput'

export default function Login() {
    const { email, password, rememberMe, handleEmailChange, handlePasswordChange, handleRememberMeChange } = useAuthHook();

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Login attempt with:', { email, password, rememberMe });
        // Call an API here
    };

    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">
                {/* Use offset to center the column on medium and larger screens */}
                <div className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto">
                    {/* Card with shadow and rounded corners */}
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-4 p-sm-5">
                            <h2 className="card-title text-center mb-4 fw-bold">Welcome Back</h2>

                            <form onSubmit={handleSubmit}>

                                {/* Email Input */}
                                <AuthInput
                                    label="Email address"
                                    type="email"
                                    id="loginEmail"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required={true}
                                />

                                <AuthInput
                                    label="Password"
                                    type="password"

                                    id="loginPassword"
                                    placeholder="Password"
                                    value={password} 
                                    onChange={handlePasswordChange}
                                    required={true}
                                />

                                {/* Remember Me & Forgot Password Row */}
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="rememberMeCheck"
                                            checked={rememberMe}
                                            onChange={handleRememberMeChange}
                                        />
                                        <label className="form-check-label" htmlFor="rememberMeCheck">
                                            Remember me
                                        </label>
                                    </div>
                                    {/*FORGOT PASSWORD, IMPLEMENT WHEN WE HAVE AN API FOR THIS <a href="#!" className="small text-decoration-none">Forgot password?</a> */}
                                </div>

                                {/* Submit Button */}
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-lg fw-semibold rounded-3 py-2">
                                        Login
                                    </button>
                                </div>

                                {/* Sign Up Link */}
                                <div className="text-center mt-4">
                                    <p className="small mb-0">Don't have an account?
                                        <a href="/signup" className="fw-medium text-decoration-none ms-1">Sign up</a>
                                    </p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
