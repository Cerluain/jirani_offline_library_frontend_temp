import { useState, useEffect } from "react";
import { Dropdown, Table } from "react-bootstrap";

export default function StudentAnalytics() {
  const [studentsData, setStudentsData] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [selectedStudent, setSelectedStudent] = useState("Student 1");
  // eslint-disable-next-line no-unused-vars
  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Fake fetch of backend for now

      try {
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 800)); //fake delay for user experience lol

        const FAKE_FETCH_DATA = {
          "Student 1": {
            totalHours: "12 Hours",
            mostCommon: "Intro to CS",
            lastBook: "React Basics",
            books: [
              {
                title: "React Basics",
                lastOpened: "18/12/2025",
                page: 72,
                hours: "5 Hours",
              },
              {
                title: "Intro to CS",
                lastOpened: "15/12/2025",
                page: 10,
                hours: "7 Hours",
              },
            ],
          },
          "Student 2": {
            totalHours: "2 Hours",
            mostCommon: "Advanced Math",
            lastBook: "Advanced Math",
            books: [
              {
                title: "Advanced Math",
                lastOpened: "20/12/2025",
                page: 102,
                hours: "2 Hours",
              },
            ],
          },
        };
        setStudentsData(FAKE_FETCH_DATA);
        const names = Object.keys(FAKE_FETCH_DATA);
        setStudentList(names);

        if (names.length > 0) setSelectedStudent(names[0]);
      } catch (err) {
        setError("Use Effect Fetch Error");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const currentData = selectedStudent ? studentsData[selectedStudent] : null;

  if (loading) {
    return <div>Loading student analytics...</div>;
  }
  return (
    <>
      <div className="container py-5">
        {/* Page Title */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <h1 className="display-3 fw-normal">Student Analytics</h1>
          </div>
        </div>

        {/* Main Card */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="card shadow-sm px-4 py-5">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 mx-auto">
                  {/* CONTENT WILL GO HERE IN CHUNK 3 & 4 */}
                  {currentData && (
                    <>
                      <p className="lead mb-2">
                        <strong>Total Time Spent This Week:</strong>{" "}
                        {currentData.totalHours}
                      </p>
                      <p className="lead mb-2">
                        <strong>Most Common Book Opened:</strong>{" "}
                        {currentData.mostCommon}
                      </p>
                      <p className="lead mb-4">
                        <strong>Last Book Opened:</strong>{" "}
                        {currentData.lastBook}
                      </p>
                    </>
                  )}

                  <h5 className="h5 mt-3 mb-2">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-primary"
                        id="dropdown-basic"
                      >
                        {selectedStudent || "Select Student"}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {studentList.map((s, i) => (
                          <Dropdown.Item
                            key={i}
                            onClick={() => setSelectedStudent(s)}
                          >
                            {s}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
