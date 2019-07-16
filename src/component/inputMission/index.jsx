import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
`;
const InputText = styled.input`
  width: 100%;
  height: 56px;
  font-size: 16px;
  color: #ff4384;
  text-indent: 16px;
  outline: none;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #ff4384;
    font-style: italic;
    opacity: 1;
    /* Firefox */
  }
`;
const InputAddBtn = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  color: #ff4384;
  text-align: center;
  position: absolute;
  top: 18px;
  right: 16px;
  :hover {
    cursor: pointer;
  }
`;

export default class extends React.Component {
  render() {
    return (
      <InputWrapper>
        <InputText type="text" placeholder="ADD A NEW MISSION..." />
        <InputAddBtn>+</InputAddBtn>
      </InputWrapper>
    );
  }
}
