import { useState, useRef, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form } from "../../styledComponents/Authorization/AutorizationSC";
import { backUrl } from "../../config/constants";

export default function LoginForms() {
  const emailRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/home");
    try {
      const response = await axios.post(`${backUrl}signin`, {
        email,
        password: pwd,
      });
      const token = response?.data?.token;
      const name = response?.data?.name;
      const role = response?.data?.role;
      const objPost = { name, token, role };
      localStorage.setItem("userData", JSON.stringify(objPost));
      setEmail("");
      setPwd("");
      navigate("/home");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No response from the server");
      }
      if (err.response?.status === 401) {
        setErrMsg("Email or password invalid");
      } else {
        setErrMsg("Error trying to login");
      }
      errRef.current.focus();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </h2>
      <input
        type="text"
        id="email"
        ref={emailRef}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
        placeholder="e-mail"
      />

      <input
        type="password"
        id="password"
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
        required
        placeholder="password"
      />
      <button type="submit">{"Login"}</button>
    </Form>
  );
}
