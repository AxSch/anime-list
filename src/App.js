import React from 'react';
import Layout from './Components/Layout/Layout'
import { Switch, Route } from 'react-router-dom'
import ListView from './Containers/ListView/ListView'


function App() {
  return (
    <div className="h-screen relative">
      <Layout>
        <Switch>
          <Route path="/" exact component={ListView} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
