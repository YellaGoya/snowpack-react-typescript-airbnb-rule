import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import logo from '@/assets/logo.svg';

// interface AppProps {}
const AppContainer = styled.div`
  text-align: center;

  code {
    background: #fff3;
    padding: 4px 8px;
    border-radius: 4px;
  }

  p {
    margin: 0.4rem;
  }
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img`
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
`;

const AppLink = styled.a`
  color: #61dafb;
`;

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </AppLink>
        </p>
      </AppHeader>
    </AppContainer>
  );
};

export default App;
