import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";
import colors from "../../config/colors";
import loginamico from "../../assets/images/login-amico.png";
import LoginForms from "../../components/authComponents/loginForms.jsx";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    if (userData !== null) {
      navigate("/home");
    }
  }, []);
  return (
    <Container>
      <IoIosArrowBack onClick={() => navigate(-1)} />
      <h1>Login</h1>
      <img className="ilustration" src={loginamico} alt="Ilustration login" />
      <LoginForms />
      <p>Forgot password? Click here.</p>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${colors.white};
  overflow: hidden;
  > svg {
    position: absolute;
    top: 30px;
    left: 30px;
    color: ${colors.black};
    width: 40px;
    height: 40px;
  }
  > .ilustration {
    width: 250px;
    height: 250px;
    position: absolute;
    top: 36px;
  }
  h1 {
    font-size: 40px;
    position: absolute;
    top: 270px;
  }
  p {
    width: 200px;
    height: 16px;
    position: absolute;
    top: 600px;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: ${colors.secondary};
    margin-top: 100px;
  }
  form {
    margin-top: 75px;
  }
`;
