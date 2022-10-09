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
  return (
    <Container>
      <h1>Select:</h1>
      <OptionContainer>
        <h3>Your ongoing medical consultations</h3>
        <FiClock />
      </OptionContainer>
      <OptionContainer>
        <h3>Your medical consultation history</h3>
        <AiOutlineFileDone />
      </OptionContainer>
      <OptionContainer>
        <h3>Start a new consultation</h3>
        <GiTalk />
      </OptionContainer>
    </Container>
  );
}
