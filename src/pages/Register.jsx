import React, { useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

const Register = () => {
  const signupNameRef = useRef();
  const signupEmailRef = useRef();
  const signupPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const name = signupNameRef.current.value;
    const email = signupEmailRef.current.value;
    const password = signupPasswordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password and Confirm Password do not match.");
      return;
    }

    // Save the registration data, e.g., in your data store or state

    // Assume registration is successful for this example
    const registrationSuccessful = true;

    if (registrationSuccessful) {
      window.alert("Registration successful! You can now login.");
      navigate("/login"); // Redirect to the login page
    }
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    ref={confirmPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              {error && <p className="error-message">{error}</p>}
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
