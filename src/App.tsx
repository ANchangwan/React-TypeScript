import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./index";
import { useState } from "react";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vh;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin-top: 10em;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  return (
    <ThemeProvider theme={mode === "light" ? darkTheme : lightTheme}>
      <Wrapper>
        <Title>Title</Title>
        <button onClick={changeMode}>click me</button>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
