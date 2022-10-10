import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120vh;
  background-color: #1f1f1f;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120vh;
    background: linear-gradient(
      91.97deg,
      rgba(1, 42, 255, 0.37) 1.48%,
      rgba(31, 31, 31, 0.47) 98.17%
    );
  }
  img {
    position: absolute;
    top: 20%;
    width: 100%;
    height: 60%;
  }
`;
