import React from 'react';
import Layout from './Components/Layout/Layout'
import { Switch, Route } from 'react-router-dom'
import ListView from './Containers/ListView/ListView'
import CardDetails from './Components/CardDetails/CardDetails';



function App() {
  return (
    <div className="h-screen relative">
      <Layout>
        <Switch>
          <Route path="/" exact component={ListView} />
          <Route path="/anime/:id" component={(routerProps) => <CardDetails content={routerProps.location.state.content} />} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
