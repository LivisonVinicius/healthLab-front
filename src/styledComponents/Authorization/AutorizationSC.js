import styled from "styled-components";
import colors from "../../config/colors";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  h4 {
    margin-bottom: 20px;
    margin-top: -20px;
    color: #ffffff;
  }
  svg {
    padding-top: 3px;
  }
  input:focus {
    outline: none !important;
  }
  input {
    width: 88%;
    height: 55px;
    background: #ffffff;
    font-size: 22px;
    line-height: 33px;
    color: #000000;
    padding-left: 17px;
    margin-bottom: 24px;
    border-style: solid;
    border-width: 2px;
    border-right: none;
    border-top: none;
    border-left: none;
    font-weight: 700;
    ::placeholder {
      font-size: 18px;
      line-height: 16px;
      color: #9f9f9f;
      letter-spacing: 0.4px;
    }
  }
  button {
    border: none;
    width: 88%;
    height: 50px;
    background: ${colors.primary};
    border-radius: 50px;
    font-weight: 700;
    color: #ffffff;
    font-size: 18px;
    line-height: 33px;
  }
`;
