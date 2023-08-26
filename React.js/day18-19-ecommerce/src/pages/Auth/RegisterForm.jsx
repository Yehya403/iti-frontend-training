import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const registerForm = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      // Register logic here
      // You can make an API call to register the user

      // Simulate successful registration for demo
      setRegistrationSuccess(true);
    },
  });

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Register Form</h2>
        {registrationSuccess ? (
          <div className="alert alert-success">
            Registration successful! You can now log in.
          </div>
        ) : (
          <form onSubmit={registerForm.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className={`form-control ${
                  registerForm.touched.username && registerForm.errors.username
                    ? "is-invalid"
                    : ""
                }`}
                id="username"
                name="username"
                value={registerForm.values.username}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              {registerForm.touched.username && registerForm.errors.username && (
                <div className="invalid-feedback">
                  {registerForm.errors.username}
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${
                  registerForm.touched.email && registerForm.errors.email
                    ? "is-invalid"
                    : ""
                }`}
                id="email"
                name="email"
                value={registerForm.values.email}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              {registerForm.touched.email && registerForm.errors.email && (
                <div className="invalid-feedback">{registerForm.errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  registerForm.touched.password && registerForm.errors.password
                    ? "is-invalid"
                    : ""
                }`}
                id="password"
                name="password"
                value={registerForm.values.password}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              {registerForm.touched.password && registerForm.errors.password && (
                <div className="invalid-feedback">
                  {registerForm.errors.password}
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  registerForm.touched.confirmPassword &&
                  registerForm.errors.confirmPassword
                    ? "is-invalid"
                    : ""
                }`}
                id="confirmPassword"
                name="confirmPassword"
                value={registerForm.values.confirmPassword}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              {registerForm.touched.confirmPassword &&
                registerForm.errors.confirmPassword && (
                  <div className="invalid-feedback">
                    {registerForm.errors.confirmPassword}
                  </div>
                )}
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={!registerForm.isValid}
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
