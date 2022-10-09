import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";
import colors from "../../config/colors";
import registeramico from "../../assets/images/registerEmployee.png";
import RegisterEmployeeForms from "../../components/authComponents/registerEmployeeForms.jsx";

export default function Register() {
  const navigate = useNavigate();
  return (
    <Container>
      <IoIosArrowBack onClick={() => navigate(-1)} />
      <h1>Register</h1>
      <img
        className="ilustration"
        src={registeramico}
        alt="Ilustration login"
      />
      <RegisterEmployeeForms />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
    width: 200px;
    height: 200px;
    position: absolute;
    top: 10px;
  }
  h1 {
    font-size: 40px;
    position: absolute;
    top: 220px;
  }
  p {
    width: 200px;
    height: 16px;
    position: absolute;
    margin-top: 360px;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: ${colors.secondary};
  }
  form {
    margin-top: 300px;
  }
`;
