import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../static/img/NotFound.gif";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Error = () => {
  return (
    <Container>
      <img src={NotFoundImg} alt="404" />

      <Link to="/">
        <button className="btn btn-secondary mb-5">Guide me Home</button>
      </Link>
    </Container>
  );
};

export default Error;
