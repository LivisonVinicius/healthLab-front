import colors from "../../config/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url("${(props) => props.bg}") 50% 50% no-repeat;
  background-size: cover;
  color: ${colors.white};
  > div {
    width: 100%;
    height: 100%;
    background: rgba(31, 31, 31, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      position: absolute;
      width: 400px;
      height: 400px;
      z-index: 1;
      left: -40px;
      top: -140px;
    }
    h1 {
      font-size: 48px;
      line-height: 49px;
      text-align: right;
      width: 220px;
      height: 199px;
      position: absolute;
      right: 32px;
      bottom: 35%;
    }
    div {
      width: 100%;
      height: 120px;
      position: absolute;
      left: 15%;
      bottom: 80px;
    }
  }
  .button {
    width: 70%;
    height: 50px;
    font-size: 16px;
    line-height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${colors.white};
    border-radius: 50px;
    margin-bottom: 10px;
  }
  .primary {
    background-color: ${colors.primary};
  }
  .secondary {
    background-color: ${colors.secondary};
  }
`;
