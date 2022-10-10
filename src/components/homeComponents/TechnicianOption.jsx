import React from "react";
import { useNavigate } from "react-router-dom";
import { FiClock } from "react-icons/fi";
import { AiOutlineFileDone, AiOutlineUserAdd } from "react-icons/ai";
import {
  Container,
  OptionContainer,
} from "../../styledComponents/Options/OptionSC";

export default function TechnicianOptions() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>Select:</h1>
      <OptionContainer>
        <h3>Your ongoing medical exam requests</h3>
        <FiClock />
      </OptionContainer>
      <OptionContainer>
        <h3>Your medical exam history</h3>
        <AiOutlineFileDone />
      </OptionContainer>
    </Container>
  );
}
