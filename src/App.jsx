import React from 'react';
import styled from 'styled-components';

import { Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HistoryPage } from './pages/History';
import { MainPage } from './pages/Main';
import { ErrorBoundary } from './components/ErrorBoundary';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const App = () => {
  return (
    <StyledApp>
      <ErrorBoundary>
        <Header />
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/history' component={HistoryPage} />
        </Switch>
      </ErrorBoundary>
    </StyledApp>
  );
}

export { App };
