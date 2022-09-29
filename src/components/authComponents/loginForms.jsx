import { useState, useRef, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form } from "../../styledComponents/Authorization/AutorizationSC";

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

    //   try {
    //     const response = await axios.post(`${backUrl}signin`, {
    //       email,
    //       password: pwd,
    //     });
    //     const token = response?.data?.token;
    //     const name = response?.data?.name;
    //     const photo = response?.data?.userPhoto;
    //     const userId = response?.data?.userId;
    //     const objPost = { name, token, photo, userId };
    //     localStorage.setItem("userData", JSON.stringify(objPost));
    //     setEmail("");
    //     setPwd("");
    //     navigate("/timeline");
    //   } catch (err) {
    //     if (!err?.response) {
    //       setErrMsg("Sem resposta do servidor");
    //     }
    //     if (err.response?.status === 400) {
    //       setErrMsg("E-mail ou senha incorretos");
    //     }
    //     if (err.response?.status === 401) {
    //       setErrMsg("Não autorizado");
    //     }
    //     if (err.response?.status === 404) {
    //       setErrMsg("Usuário não encontrado");
    //     } else {
    //       setErrMsg("Falha no login");
    //     }
    //     errRef.current.focus();
    //   }
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
