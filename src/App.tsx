import './App.css';
import ReactGA from 'react-ga';
import { Component } from 'react';

ReactGA.initialize('G-L8D4TF820R');

class App extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return <div className="App">hello</div>;
  }
}

export default App;
