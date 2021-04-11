import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Layout from './components/Layout';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#375482'
    }
  }
})

function App() {
  return (
    <div className="App">

      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Notes />
              </Route>
              <Route exact path="/create">
                <Create />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
