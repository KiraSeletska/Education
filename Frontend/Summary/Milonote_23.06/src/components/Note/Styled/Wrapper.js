import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 3px;
  padding: 20px;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  height: 40px;
  width: 200px;
  font-size: 16px;
  user-select: none;
`;
