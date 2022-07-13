import { useParams, useLocation } from "react-router";
import { useState } from "react";
import styled from "styled-components";

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader_ = styled.span`
  text-align: center;
  font-size: 28px;
  padding: 20px;
  display: block;
`;

const Loader = styled.span`
  text-align: center;
  font-size: 28px;
  padding: 20px;
  display: block;
`;

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  console.log(state.name);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "loading"}</Title>
      </Header>
      {loading ? <Loader_>...loading</Loader_> : null}
    </Container>
  );
}

export default Coin;
