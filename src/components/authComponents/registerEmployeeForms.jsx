import React from "react";
import { useRef, useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form } from "../../styledComponents/Authorization/AutorizationSC";
import { backUrl } from "../../config/constants";

const USER_REGEX =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CPF_REGEX = /([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2})/;
export default function RegisterForms() {
  const userRef = useRef();
  const errRef = useRef();

  const [role, setRole] = useState("doctor");

  function handleChange(event) {
    setRole(event.target.value);
  }

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [cpf, setCpf] = useState("");
  const [validCpf, setValidCpf] = useState(false);
  const [cpfFocus, setCpfFocus] = useState(false);

  const [speciality, setSpeciality] = useState("");
  const [validSpeciality, setValidSpeciality] = useState(false);
  const [specialityFocus, setSpecialityFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidSpeciality(USER_REGEX.test(speciality));
  }, [speciality]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setValidCpf(CPF_REGEX.test(cpf));
  }, [cpf]);

  useEffect(() => {
    setErrMsg("");
  }, [user, email, pwd, cpf]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(email);
    const v4 = CPF_REGEX.test(cpf);
    const v5 = USER_REGEX.test(speciality);
    if (!v1) {
      setErrMsg("Invalid name");
      return;
    }
    if (!v2) {
      setErrMsg(
        "Invalid password, password must contain lower case letter, upper case letter,special characters, number and length between 8-24"
      );
      return;
    }
    if (!v3) {
      setErrMsg("Invalid email");
    }
    if (!v4) {
      setErrMsg("Invalid CPF");
    }
    if (!v5) {
      setErrMsg("Invalid speciality");
    }
    try {
      const postObj = {
        name: user,
        email,
        password: pwd,
        cpf: cpf,
        speciality,
      };
      await axios.post(`${backUrl}signup/${role}`, postObj);
      setUser("");
      setPwd("");
      setCpf("");
      setEmail("");
      setRole("");
      alert("User created");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No response from the server");
      } else if (err.response?.status === 409) {
        setErrMsg("CPF or email already registered");
      } else {
        setErrMsg("Error trying to register");
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
        id="username"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setUser(e.target.value)}
        value={user}
        required
        aria-invalid={validName ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={() => setUserFocus(true)}
        onBlur={() => setUserFocus(false)}
        placeholder="name"
      />
      <h4
        id="uidnote"
        className={
          userFocus && user && !validName ? "instructions" : "offscreen"
        }
      >
        <FaInfoCircle />
        Must be a valid name
      </h4>
      <select onChange={handleChange}>
        <option value="doctor">Doctor</option>
        <option value="technician">Technician</option>
      </select>
      <input
        type="email"
        id="email"
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
        aria-invalid={validEmail ? "false" : "true"}
        aria-describedby="emailnote"
        onFocus={() => setEmailFocus(true)}
        onBlur={() => setEmailFocus(false)}
        placeholder="e-mail"
      />
      <h4
        id="emailnote"
        className={
          emailFocus && email && !validEmail ? "instructions" : "offscreen"
        }
      >
        <FaInfoCircle />
        Must be a valid email
      </h4>
      <input
        type="password"
        id="password"
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
        required
        aria-invalid={validPwd ? "false" : "true"}
        aria-describedby="pwdnote"
        onFocus={() => setPwdFocus(true)}
        onBlur={() => setPwdFocus(false)}
        placeholder="Senha"
      />
      <h4
        id="pwdnote"
        className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
      >
        <FaInfoCircle />
        Password length must be between 8-24.
        <br />
        Password must contain at least a lower case letter, a upper case letter,
        a special character and a number.
        <br />
      </h4>
      <input
        type="text"
        id="speciality"
        onChange={(e) => setSpeciality(e.target.value)}
        value={speciality}
        required
        aria-invalid={validSpeciality ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={() => setSpecialityFocus(true)}
        onBlur={() => setSpecialityFocus(false)}
        placeholder="speciality"
      />
      <h4
        id="uidnote"
        className={
          specialityFocus && speciality && !validSpeciality
            ? "instructions"
            : "offscreen"
        }
      >
        <FaInfoCircle />
        Must be a valid speciality
      </h4>
      <input
        type="text"
        id="cpf"
        onChange={(e) => setCpf(e.target.value)}
        value={cpf}
        required
        aria-invalid={validCpf ? "false" : "true"}
        aria-describedby="cpfnote"
        onFocus={() => setCpfFocus(true)}
        onBlur={() => setCpfFocus(false)}
        placeholder="cpf"
      />
      <h4
        id="confirmnote"
        className={cpfFocus && !validCpf ? "instructions" : "offscreen"}
      >
        <FaInfoCircle />
        Invalid CPF.
      </h4>
      <button
        type="submit"
        disabled={
          !validName ||
          !validPwd ||
          !validCpf ||
          !validEmail ||
          !validSpeciality
            ? true
            : false
        }
      >
        {"Register"}
      </button>
    </Form>
  );
}
