import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewsList from './Components/NewsList';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="*">
            <NewsList />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
