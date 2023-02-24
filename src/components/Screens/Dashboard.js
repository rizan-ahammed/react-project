import React from "react";
import styled from "styled-components";
import Left from "./Left";
import Right from "./Right";

function Dashboard() {
  return (
    <>
      <LeftContainer>
        <Left />
      </LeftContainer>
      <RightContainer>
        <Right />
      </RightContainer>
    </>
  );
}

export default Dashboard;

const LeftContainer = styled.div`
  width: 60%;
`;

const RightContainer = styled.div`
  width: 40%;
`;
