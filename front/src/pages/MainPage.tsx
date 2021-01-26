/* External dependencies */
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Internal dependencies */
import Navigation from '@components/Navigation';
import Friend from '@components/Friend';

const Container = styled.section`
  display: flex;
  min-height: 100vh;
  & > aside {
    width: 70px;
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
      <main>
        <Router basename={process.env.PUBLIC_URL}>
          <Route exact path="/" component={Friend} />
        </Router>
      </main>
    </Container>
  );
};

export default MainPage;