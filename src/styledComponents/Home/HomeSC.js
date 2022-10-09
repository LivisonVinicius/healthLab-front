import styled from "styled-components";
import colors from "../../config/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background-color: ${colors.white};
  > img {
    position: absolute;
    height: 250px;
    width: 300px;
    left: -25px;
    top: -75px;
  }
  /* .logoBox {
    background-color: #1f1f1f;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 132px;
    border-radius: 5px;
    margin-top: 50px;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        91.97deg,
        rgba(1, 42, 255, 0.37) 1.48%,
        rgba(31, 31, 31, 0.47) 98.17%
      );
    }
    img {
      width: 300px;
      height: 220px;
      position: absolute;
    }
  } */
  .descriptionBox {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    flex-direction: column;
    margin-top: 100px;
    h2 {
      text-align: left;
      width: 100%;
      font-weight: bold;
      font-size: 20px;
      line-height: 36px;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.25px;
      width: 100%;
    }
  }
`;
