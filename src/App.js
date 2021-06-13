import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/ui/Header';
import Index from './components/pages/Index';
import Project from './components/pages/Proyect';
import Projects from './context/projects/projectState';
import Tasks from './context/tasks/taskState';

function App() {
  return (
    <Projects>
      <Tasks>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Index} />
            <Route path='/project/:id' component={Project} />
          </Switch>
        </Router>
      </Tasks>
    </Projects>
  );
}

export default App;
