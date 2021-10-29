import React,{Suspense, lazy} from 'react';
import { Switch, Route } from 'react-router-dom';

const MainPage = lazy(()=> import('../MainPage/Loadable'))
const Screener = lazy(()=> import('../Screener/Loadable'))
const TechnicalAnalysis = lazy(()=> import('../TechnicalAnalysis/Loadable'))
const BuyCalculator = lazy(()=> import('../BuyCalculator/Loadable'))
const HeatMap = lazy(()=> import('../HeatMap/Loadable'))
const TreeMap = lazy(()=> import('../TreeMap/Loadable'))
const TimeSeries = lazy(()=> import('../TimeSeries/Loadable'))
const TradingviewTechAnaly = lazy(()=> import('../TradingviewTechAnaly/Loadable'))
const TopBroker = lazy(()=> import('../TopBroker/Loadable'))
const BarChart = lazy(()=> import('../BarChart/Loadable'))
const AdvDec = lazy(()=> import('../AdvDec/Loadable'))
const OhlcVol = lazy(()=> import('../PlotOhlcVol/Loadable'))
const PeriodicRetrunBar = lazy(()=> import('../PeriodicReturnBar/Loadable'))

const PeriodicReturn = lazy(()=> import('../PeriodicReturn/Loadable'))


export default function UserRoute() {
  return (
    <div>
      <Suspense fallback={<div>LOADING...</div>}>
      <Switch>
    
        <Route exact path="/dashboard" component={MainPage} /> 
        
        <Route exact path="/dashboard/overview"     component={MainPage} />
        <Route exact path="/dashboard/map/tree-map" component={TreeMap} />
        <Route exact path="/dashboard/map/heat-map" component={HeatMap} />
        <Route exact path="/dashboard/time-series" component={TimeSeries} />
        <Route exact path="/dashboard/top-brokers" component={TopBroker} />
        <Route exact path="/dashboard/top-brokers" component={TopBroker} />
        <Route exact path="/dashboard/top-stocks" component={BarChart} />
        <Route exact path="/dashboard/adv-dec"  component={AdvDec} />
        <Route exact path="/dashboard/technical-analysis-chart" component={TradingviewTechAnaly} />
        <Route
          exact
          path="/dashboard/technical-analysis"
          component={TechnicalAnalysis}
        />
        <Route
          exact
          path="/dashboard/buy-sell-calc"
          component={BuyCalculator}
        />
        <Route path="/dashboard/stock-screener" component={Screener} />

         <Route path="/dashboard/plot-ohlc-vol" component={OhlcVol} />

         <Route path="/dashboard/periodic-return-bar" component={PeriodicRetrunBar} />

         <Route path="/dashboard/periodic-return" component={PeriodicReturn} />
        
      </Switch>
      </Suspense>
    </div>
  );
}
