import React from "react";
import InputMission from "../../inputMission/index.jsx";
import styled from "styled-components";

const HomeLeftWrapper = styled.div`
  flex: 0 0 auto;
  width: 445px;
`;
export default class extends React.Component {
  render() {
    return (
      <HomeLeftWrapper>
        <InputMission />
      </HomeLeftWrapper>
    );
  }
}
