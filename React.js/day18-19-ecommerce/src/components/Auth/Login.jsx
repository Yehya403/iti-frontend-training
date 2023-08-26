import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../services/auth.service";
import { gState } from "../../context/Context";
import { Link,useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { setData } = useContext(gState);
  const [userData, setUserData] = useState(null);

  const loginForm = useFormik({
    initialValues: {
      username: "kminchelle",
      password: "0lelplR",
    },
    onSubmit: async (formValues) => {
      const data = await login(formValues);
      setData((prevState) => {
        return {
          ...prevState,
          isLoggedIn: true,
          userData: data,
        };
      });
      navigate('/mytodos');
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Username is required"),
      password: Yup.string()
        .required("Password is Required")
        .min(5, "Minimum is 5 characters"),
    }),
  });

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Welcome back!</h2>
        <form onSubmit={loginForm.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              value={loginForm.values.username}
              onChange={loginForm.handleChange}
              onBlur={loginForm.handleBlur}
              name="username"
              type="text"
              id="username"
              className={`form-control ${
                loginForm.touched.username && loginForm.errors.username
                  ? "is-invalid"
                  : ""
              }`}
            />
            {loginForm.touched.username && loginForm.errors.username && (
              <div className="invalid-feedback">
                {loginForm.errors.username}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              value={loginForm.values.password}
              onChange={loginForm.handleChange}
              onBlur={loginForm.handleBlur}
              name="password"
              type="password"
              id="password"
              className={`form-control ${
                loginForm.touched.password && loginForm.errors.password
                  ? "is-invalid"
                  : ""
              }`}
            />
            {loginForm.touched.password && loginForm.errors.password && (
              <div className="invalid-feedback">
                {loginForm.errors.password}
              </div>
            )}
          </div>
          <button
            disabled={!loginForm.isValid}
            className="btn btn-primary w-100"
            type="submit"
          >
            Login
          </button>
          <p className=" mt-2 text-center">
            Don't have an account yet?{" "}
            <Link to="/register">Register now</Link>
          </p>
        </form>
        {userData && (
          <div className="mt-3 text-center">
            <img src={userData.image} alt="" className="rounded-circle" />
            <p>{userData.firstName}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
