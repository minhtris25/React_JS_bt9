import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="container is-fluid">
      <Header />
      <div className="columns">
        <div className="column is-2">
          <Sidebar />
        </div>
        <div className="column">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;