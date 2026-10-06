import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navigation" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <main className="page">
                <header className="page-header">
                  <h1>Student Management System</h1>
                  <p>Full Stack Application using React, Spring Boot and Docker</p>
                </header>

                <section className="overview">
                  <h2>Application Information</h2>
                  <p><strong>Frontend:</strong> React + Vite</p>
                  <p><strong>Backend:</strong> Spring Boot REST API</p>
                  <p><strong>Containerization:</strong> Docker</p>
                  <p><strong>Orchestration:</strong> Docker Compose</p>
                  <p className="status">Student Management Application is Running Successfully</p>
                </section>
              </main>
            }
          />
          <Route
            path="/about"
            element={
              <main className="page">
                <header className="page-header">
                  <h1>About</h1>
                  <p>About the Student Management System</p>
                </header>
                <section className="overview">
                  <p className="content-copy">
                    This application provides a simple way to manage student
                    information. It is built with React, Spring Boot, and Docker.
                  </p>
                </section>
              </main>
            }
          />
          <Route
            path="/contact"
            element={
              <main className="page">
                <header className="page-header">
                  <h1>Contact</h1>
                  <p>Get in touch about the application</p>
                </header>
                <section className="overview">
                  <p className="content-copy">
                    For support or questions, contact your system administrator.
                  </p>
                </section>
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
