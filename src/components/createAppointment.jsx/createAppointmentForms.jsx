import React from "react";
import { useRef, useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form } from "../../styledComponents/Authorization/AutorizationSC";
import { backUrl } from "../../config/constants";

const CPF_REGEX = /([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2})/;

export default function CreateAppointmentForms() {
  const patientCPFRef = useRef();
  const errRef = useRef();

  const [role, setRole] = useState("doctor");

  function handleChange(event) {
    setRole(event.target.value);
  }

  const [patientCPF, setPatientCPF] = useState("");
  const [validPatientCPF, setValidPatientCPF] = useState(false);
  const [patientCPFFocus, setPatientCPFFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    patientCPFRef.current.focus();
  }, []);

  useEffect(() => {
    setValidPatientCPF(CPF_REGEX.test(patientCPF));
  }, [patientCPF]);


  useEffect(() => {
    setErrMsg("");
  }, [patientCPF]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = CPF_REGEX.test(patientCPF);
    if (!v1) {
      setErrMsg("Invalid cpf");
      return;
    }
    try {
      const postObj = {
        patientCPF,
        speciality,
        technicianId,
      
      };
      await axios.post(`${backUrl}createAppointment/${role}`, postObj);
      setPatientCPF("");
      setPwd("");
      setCpf("");
      setEmail("");
      setRole("");
      alert("Appointment created");
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
        id="patientCPF"
        ref={patientCPFRef}
        autoComplete="off"
        onChange={(e) => setPatientCPF(e.target.value)}
        value={patientCPF}
        required
        aria-invalid={validName ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={() => setPatientCPFFocus(true)}
        onBlur={() => setPatientCPFFocus(false)}
        placeholder="name"
      />
      <h4
        id="uidnote"
        className={
          patientCPFFocus && patientCPF && !validPatientCPF
            ? "instructions"
            : "offscreen"
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
