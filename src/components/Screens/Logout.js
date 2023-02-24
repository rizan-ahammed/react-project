import React from "react";
import styled from "styled-components";
import Aside from "../Includes/Aside";

function Logout() {
  return (
    <>
      <Container>
        <Aside />
        <Div>
          <Image src={require("../../assets/not-working.jpg")} alt="image" />
        </Div>
      </Container>
    </>
  );
}

export default Logout;

const Container = styled.section`
  display: flex;
`;
const Div = styled.div`
  width: 100%;
  display: flex;
`;
const Image = styled.img`
  display: block;
  width: 70%;
`;
