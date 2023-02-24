import React from "react";
import styled from "styled-components";
import Aside from "./Includes/Aside";
import Dashboard from "./Screens/Dashboard";

function MainSection() {
  return (
    <>
      <Container>
        <Aside />
        <Div>
          <Dashboard />
        </Div>
      </Container>
    </>
  );
}

export default MainSection;

const Container = styled.section`
  display: flex;
`;
const Div = styled.div`
  width: 100%;
  display: flex;
`;
