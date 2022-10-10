import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";
import colors from "../../config/colors";
import appointment from "../../assets/images/consultation.png";
import RegisterEmployeeForms from "../../components/authComponents/registerEmployeeForms.jsx";
import { useEffect } from "react";
import { userData } from "../../config/constants";

export default function CreateAppointment() {
  const navigate = useNavigate();
  useEffect(() => {
    if (userData === null) {
      navigate("/");
    }
  }, []);
  return (
    <Container>
      <IoIosArrowBack onClick={() => navigate(-1)} />
      <h1>Fill in the appointment details</h1>
      <img className="ilustration" src={appointment} alt="Ilustration login" />
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
    font-size: 25px;
    position: absolute;
    top: 230px;
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
