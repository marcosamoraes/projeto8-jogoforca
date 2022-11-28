import styled from "styled-components";

export const Items = styled.div`
  display: flex;
  min-width: 90%;
  max-width: 90%;
  align-self: center;
`;

export const Image = styled.img`
  width: 40%;
`;

export const LeftItem = styled.div`
  min-width: 50%;
  max-width: 50%;
  float: left;
`;

export const RightItem = styled.div`
  display: flex;
  min-width: 50%;
  max-width: 50%;
  align-items: flex-end;
  flex-direction: column;
`;
export const StartButton = styled.button`
  background-color: #27ae60;
  color: #ffffff;
  border: none;
  width: 200px;
  height: 60px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 8px;
  font-family: "Roboto", sans-serif !important;
`;

export const Div = styled.div`
  margin-top: auto;
  margin-right: 50px;
`;

export const Word = styled.span`
  font-family: "Noto Sans";
  font-style: normal;
  margin-left: 20px;
  font-weight: 700;
  font-size: 50px;
  color: ${(props) =>
    props.success === true
      ? "#27AE60"
      : props.success === false
      ? "#FF0000"
      : "#000000"};
`;
