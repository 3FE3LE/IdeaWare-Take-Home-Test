import styled, { css } from "styled-components";

const Button = styled.button`
  background: white;
  color: #333333;
  font-weight: 800;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  padding: 10px 30px;
  box-shadow: 0 3px 7px 0 #0000001A;

  ${(props) =>
    props.primary &&
    css`
      font-size: 38px;
      line-height: 45px:
      background: #06f48a;
      color: white;
      padding: 20px 70px;
    `}
  ${(props) =>
    props.control &&
    css`
      width:30px;
      padding: 3px;
      background: white;
      color: #333333;
      border-radius: 4px;
      box-sizing:border-box;
    `}
`;

export default Button;
