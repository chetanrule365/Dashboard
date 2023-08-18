import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Button, Checkbox, CircularProgress, IconButton } from "@mui/material";
import "./login.scss";

function LoginPage() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showForm, setshowForm] = useState(false);
  const [isloading, setisloading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setisloading(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  }

  return (
    <div className="login-page">
      <button className="login-button" onClick={() => setshowForm(!showForm)}>
        Login
      </button>
      {showForm && (
        <form action="" onSubmit={handleLogin}>
          <div className="email">
            <label htmlFor="email_inpt">Email</label>
            <input
              ref={emailRef}
              type="email"
              placeholder="example@comp.com"
              id="email_inpt"
              required
            />
          </div>
          <div className="password">
            <label htmlFor="pass_inpt">Password</label>
            <div style={{ display: "flex" }}>
              <input
                ref={passwordRef}
                type={showPassword ? "type" : "password"}
                placeholder="Enter Password"
                id="pass_inpt"
                required
                minLength={6}
              />
              <IconButton
                sx={{
                  padding: "2px",
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Visibility
                    sx={{
                      fontSize: "18px",
                    }}
                  />
                ) : (
                  <VisibilityOff
                    sx={{
                      fontSize: "18px",
                    }}
                  />
                )}
              </IconButton>
            </div>
          </div>
          <div className="forgot-pass-con">
            <div className="remind">
              <Checkbox
                defaultChecked
                size="small"
                sx={{ marginLeft: "-8px" }}
              />
              <p style={{ fontSize: "10px" }}>Keep me logged in</p>
            </div>
            <Button
              variant="text"
              sx={{
                fontSize: "10px",
                textTransform: "capitalize",
              }}
            >
              Forgot Password?
            </Button>
          </div>
          <button className="login-butt" type="submit" disabled={isloading}>
            {!isloading ? (
              <p>LOG IN</p>
            ) : (
              <CircularProgress size={20} sx={{ color: "white" }} />
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginPage;
