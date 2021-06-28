import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';

import HomePageLayout from './components/HomePageLayout/HomePageLayout';
import SignUpPage from './components/SignUpPage/SignUpPage';
import LogInPage from './components/LogInPage/LogInPage';
import HistoryPage from './components/HistoryPage/HistoryPage';
import EatAndCoffee from './components/Places/EatAndCoffee/EatAndCoffee';
import Sleep from './components/Places/Sleep/Sleep';
import Visit from './components/Places/Visit/Visit';
import Activities from './components/Activities/Activities';

class App extends Component {

  constructor(props) {
    super(props);

    this.container = React.createRef();
  }

  render () {
    return (
      <div> 
        <NavBar></NavBar>
        <Router>
          <Route exact path = '/'>
            <HomePageLayout>
            </HomePageLayout> 
          </Route>
          <Route exact path = '/signup'>
            <SignUpPage></SignUpPage>
          </Route>
          <Route exact path = '/login'>
            <LogInPage></LogInPage>
          </Route>
          <Route exact path = '/history'>
            <HistoryPage></HistoryPage>
          </Route>
          <Route exact path = '/eatandcoffee'>
            <EatAndCoffee></EatAndCoffee>
          </Route>
          <Route exact path = '/sleep'>
            <Sleep></Sleep>
          </Route>
          <Route exact path = '/visit'>
            <Visit></Visit>
          </Route>
          <Route exact path = '/activities'>
            <Activities></Activities>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
