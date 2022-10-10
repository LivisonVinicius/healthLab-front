import React from "react";
import { useNavigate } from "react-router-dom";
import { FiClock } from "react-icons/fi";
import { AiOutlineFileDone, AiOutlineUserAdd } from "react-icons/ai";
import { GiTalk } from "react-icons/gi";
import {
  Container,
  OptionContainer,
} from "../../styledComponents/Options/OptionSC";

export default function DoctorOptions() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>Select:</h1>
      <OptionContainer>
        <h3>Your ongoing medical appointmentss</h3>
        <FiClock />
      </OptionContainer>
      <OptionContainer>
        <h3>Your medical appointments history</h3>
        <AiOutlineFileDone />
      </OptionContainer>
      <OptionContainer onClick={() => navigate("/createAppointment")}>
        <h3>Start a new appointments</h3>
        <GiTalk />
      </OptionContainer>
    </Container>
  );
}
