/* External dependencies */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Internal dependencies */
import MainPage from '@pages/MainPage';

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
    </Router>
  );
};

export default App;
