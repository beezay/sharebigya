/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import MainPage from 'containers/MainPage/Loadable';
import Screener from 'containers/Screener/Loadable';
import TechnicalAnalysis from 'containers/TechnicalAnalysis/Loadable';
import BuyCalculator from 'containers/BuyCalculator/Loadable';
import HeatMap from 'containers/HeatMap/Loadable';
import TreeMap from 'containers/TreeMap/Loadable';
import TimeSeries from 'containers/TimeSeries/Loadable';
import LandingPage from 'containers/LandingPage/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { Dashboard } from '../Dashboard';
import Organiations from '../Organization';

// import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />

        {/* <Route path="/dashboard" component={Dashboard} /> */}
        {/* <Route exact path="/dashboard/screener" component={Screener} /> */}
        {/* <Route exact path="/" component={MainPage} /> */}
        {/* <Route exact path="/screener" component={Screener} />
        <Route exact path="/technicalanalysis" component={TechnicalAnalysis} />
        <Route exact path="/buy-sell-calculator" component={BuyCalculator} />
        <Route exact path="/heatMap" component={HeatMap} />
        <Route exact path="/treeMap" component={TreeMap} />
        <Route exact path="/timeseries" component={TimeSeries} /> */}

        {/* <Route component={NotFoundPage} /> */}
        <Route path="/org" component={Organiations} />
      </Switch>
      {/* <GlobalStyle /> */}
    </div>
  );
}
