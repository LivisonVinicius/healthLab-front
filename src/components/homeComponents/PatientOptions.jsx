import React from "react";
import { useNavigate } from "react-router-dom";
import { FiClock } from "react-icons/fi";
import { AiOutlineFileDone, AiOutlineUserAdd } from "react-icons/ai";
import { GiTalk } from "react-icons/gi";
import {
  Container,
  OptionContainer,
} from "../../styledComponents/Options/OptionSC";

export default function PatientOptions() {
  console.log("sou paciente");
  return (
    <Container>
      <h1>Select:</h1>
      <OptionContainer>
        <h3>Your ongoing medical appointments</h3>
        <FiClock />
      </OptionContainer>
      <OptionContainer>
        <h3>Your medical appointment history</h3>
        <AiOutlineFileDone />
      </OptionContainer>
    </Container>
  );
}
