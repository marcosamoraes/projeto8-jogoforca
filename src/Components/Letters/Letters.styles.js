import styled from "styled-components";

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  align-items: center;
  margin-top: 60px;
  width: 90%;
`;

export const Button = styled.button`
  flex: 1 0 6.5%;
  margin: 5px;
  width: 40px;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
  background: #e1ecf4;
  color: #39739d;
  border: 1px solid #7aa7c7;
  cursor: pointer;
  border-radius: 3px;
  text-transform: uppercase;

  &:disabled {
    background: #9faab5;
    color: #798a9f;
  }
`;