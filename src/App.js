import React from 'react';
import Layout from './Components/Layout/Layout'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="h-screen">
      <Layout>
        <Switch>
          <Route path="/" component={"home"} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
