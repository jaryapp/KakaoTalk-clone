/* External dependencies */
import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

/* Internal dependencies */
import Navigation from '@components/Navigation';
import Friend from '@components/Friend';
import ChatRooms from '@components/ChatRooms';

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
        <Route exact path="/" component={Friend} />
        <Route exact path="/chat" component={ChatRooms} />
      </main>
    </Container>
  );
};

export default MainPage;
