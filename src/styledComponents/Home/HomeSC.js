import styled from "styled-components";
import colors from "../../config/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background-color: ${colors.white};
  > svg {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    color: ${colors.primary};
  }
  > img {
    position: absolute;
    height: 300px;
    width: 300px;
    left: -25px;
    top: -100px;
  }
  .welcomeBox {
    width: 90%;
    margin-top: 100px;
    h1 {
      font-size: 30px;
      font-weight: 600;
    }
    h2 {
      font-size: 18px;
      font-weight: 500;
      margin-top: 5px;
    }
  }
  .descriptionBox {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    flex-direction: column;
    margin-top: 40px;
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
