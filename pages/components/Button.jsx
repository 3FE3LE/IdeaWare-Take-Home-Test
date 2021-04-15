import styled, { css } from "styled-components";

const Button = styled.button`
  background: white;
  color: #333333;
  font-weight: 800;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  padding: 10px 30px;
  ${(props) =>
    props.primary &&
    css`
      font-size: 38px;
      line-height: 45px;
      background: #06f48a;
      color: white;
      padding: 20px 70px;
    `}
`;

export default Button;
