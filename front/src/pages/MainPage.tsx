import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '@components/Navigation';

const Container = styled.section`
  display: flex;
  height: 100vh;
  & > aside {
    width: 75px;
  }
  & > main {
    flex-grow: 1;
  }
`;

const MainPage: React.FC = () => {
  return (
    <Container>
      <aside>
        <Navigation />
      </aside>
      <main>컨텐츠</main>
    </Container>
  );
};

export default MainPage;
