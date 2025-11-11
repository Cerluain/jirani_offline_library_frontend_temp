import { Dropdown, Table } from "react-bootstrap";

export default function StudentAnalytics() {
  // Sample data
  const students = ["Student 1", "Student 2", "Student 3"];
  const selectedStudent = "Student 3";
  const totalHoursThisWeek = "4 Hours";
  const books = [
    { title: "Book 1", lastOpened: "18/12/2025", pageLastOpened: 72, hoursThisWeek: "3 Hours" },
    { title: "Book 2", lastOpened: "15/12/2025", pageLastOpened: 70, hoursThisWeek: "1 Hour" },
  ];

  return (
    <div className="container py-5">
      {/* Page title */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 text-center">
          <h1 className="display-3 fw-normal">Student Analytics</h1>
        </div>
      </div>

      {/* Main card */}
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-sm px-4 py-5">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 mx-auto">
                <p className="lead mb-2">Total Time Spent This Week:</p>
                <p className="lead mb-2">Most Common Book Opened:</p>
                <p className="lead mb-4">Last Book Opened:</p>

                {/* Student dropdown */}
                <h5 className="h5 mt-3 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                      {selectedStudent}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {students.map((s, i) => (
                        <Dropdown.Item key={i}>{s}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </h5>

                <div className="ps-3">
                  <p className="mb-3">
                    <strong>Total Hours Spent This Week:</strong> {totalHoursThisWeek}
                  </p>
                </div>

                <p className="mb-3"><strong>Books Read This Week</strong></p>

                {/* Books table */}
                <div className="table-responsive">
                  <Table bordered hover size="sm" className="align-middle">
                    <thead className="table-light text-center">
                      <tr>
                        <th>Title</th>
                        <th>Last Opened</th>
                        <th>Page Last Opened</th>
                        <th>Hours This Week</th>
                      </tr>
                    </thead>

                    <tbody>
                      {books.map((b, i) => (
                        <tr key={i}>
                          <td>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="link"
                                className="text-decoration-none text-dark p-0"
                              >
                                {b.title}
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item>
                                  <strong>Last Opened:</strong> {b.lastOpened}
                                </Dropdown.Item>
                                <Dropdown.Item>
                                  <strong>Page:</strong> {b.pageLastOpened}
                                </Dropdown.Item>
                                <Dropdown.Item>
                                  <strong>Hours This Week:</strong> {b.hoursThisWeek}
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                          <td className="text-center">{b.lastOpened}</td>
                          <td className="text-center">{b.pageLastOpened}</td>
                          <td className="text-center">{b.hoursThisWeek}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>

                <div className="py-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
