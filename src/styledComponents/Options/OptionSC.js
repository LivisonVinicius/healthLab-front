import styled from "styled-components";
import colors from "../../config/colors";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
    margin-bottom: 10px;
  }
`;

export const OptionContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${colors.white};
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    color: rgba(31, 31, 31, 0.5);
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
    margin-left: 20px;
  }
  svg {
    margin-right: 10px;
    width: 25px;
    height: 25px;
    color: ${colors.primary};
  }
`;
