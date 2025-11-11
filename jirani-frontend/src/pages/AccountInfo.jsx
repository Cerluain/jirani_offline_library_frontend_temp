import PasswordResetButton from "../components/PasswordResetButton";

export default function AccountInfo() {
  return (
    <>
      <div className="container mt-5">
        <div className="p-5 mx-auto" style={{ maxWidth: "900px" }}>
          <div className="row align-items-center justify-content-center gy-4">
            {/* Left side: Account Info */}
            <div className="col-lg-6 col-md-8 text-center text-md-start">
              <h3 className="mb-4 text-primary fw-semibold">Account Info</h3>

              <div className="mb-3">
                <strong>Account Type:</strong> <span>Student</span>
              </div>

              <div className="mb-3">
                <strong>Username:</strong> <span>johndoe123</span>
              </div>

              <div className="mb-4">
                <strong>High Contrast (Button):</strong> <span>Enabled</span>
              </div>

              {/* Password Reset Button */}
              <PasswordResetButton
                handleClick={() => alert("Reset password clicked!")}
              />
            </div>

            {/* Right side: Profile Picture */}
            <div className="col-lg-5 col-md-8 text-center">
              <div
                className="mx-auto border border-4 border-primary rounded-circle overflow-hidden shadow-lg d-flex align-items-center justify-content-center bg-light"
                style={{ width: "200px", height: "200px" }}
              >
                <img
                  src="https://img.freepik.com/free-photo/portrait-beautiful-purebred-pussycat-with-shorthair-orange-collar-neck-sitting-floor-reacting-camera-flash-scared-looking-light-indoor_8353-12551.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Profile"
                  className="img-fluid w-100 h-100 rounded-circle object-fit-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
