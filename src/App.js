import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { SideMenu } from './components/SideMenu';
import { Home } from './pages/Home';
import { Works } from './pages/Works';
import { Workspace } from './pages/Workspace';
import { Chat } from './pages/Chat';


function App() {
  return (
      <>
      <Router>
        <SideMenu />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/work" component={Works} />
          <Route path="/workspace" component={Workspace} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </Router>
      </>
    
  );
}

export default App;
