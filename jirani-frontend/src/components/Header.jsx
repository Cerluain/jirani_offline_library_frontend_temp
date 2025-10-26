import offlib_logo from '../assets/OFFLIB_LOGO_TRNS.png'

export default function Header() {
    // State and handler for collapsing have been removed.

    // Main navigation links that will be on the left the header
    const mainNavLinks = [
        { name: 'Dashboard', href: '/maindashboard' },
        { name: 'Analytics', href: '/analytics' },
        { name: 'Upload & Manage', href: '/uploadandmanagement' },
    ];

    // Define the user-related links (profile, auth) and will be on the right
    const userNavLinks = [
        { name: 'Profile', href: '/profile' },
        { name: 'Login', href: '/login' },
        { name: 'Sign Up', href: '/signup' },
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container-fluid">
                
                {/* OFFLIB Logo */}
                <a href='/'>
                    <img src={offlib_logo} width="30" height="30" alt="LOGO"/>
                </a>


                {/* Menu Wrapper */}
                {/* The 'navbar-collapse' class handles the flex layout */}
                {/* The 'navbar-expand-lg' on the <nav> handles responsive stacking */}
                <div 
                    className="navbar-collapse" 
                    id="navbarNav"
                >
                    {/* Main Navigation Links (Left) */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {mainNavLinks.map((link) => (
                            <li className="nav-item" key={link.name}>
                                <a className="nav-link" href={link.href}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* User/Auth Navigation Links (Right) */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {userNavLinks.map((link) => (
                            <li className="nav-item" key={link.name}>
                                <a className="nav-link" href={link.href}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

// --- Main App component (for demonstration) ---
// In your real app, you would import and use the 'Header' component
// within your main layout or router.
function App() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        {/* Your page content (managed by a router) would go here */}
        <h1>Page Content</h1>
        <p>This is where your pages like MainDashboard, Analytics, etc., would be rendered.</p>
      </div>
    </div>
  );
}

