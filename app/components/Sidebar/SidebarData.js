import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
// import * as RiIcons from 'react-icons/ri';
// import * as MdIcons from 'react-icons/md';
// import * as BsIcons from 'react-icons/bs';
// import * as SiIcons from 'react-icons/si';
// import Header from './header.svg';


export const SidebarData = [
    {
    title: 'Market Overview',
    path: '/dashboard/overview',
    // icon: <AiIcons.AiFillHome />,
    // iconCloseds: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    
  },
  {
    title: 'Maps',
  
    // icon: <AiIcons.AiOutlineHeatMap />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav:[
      {
        title: 'Tree Map',
        path: '/dashboard/map/tree-map',
        // icon: <AiIcons.AiOutlineHeatMap />,
        // icon: <Header />,

      },
      {
        title: 'Heat Map',
        path: '/dashboard/map/heat-map',
        // icon: <AiIcons.AiOutlineHeatMap />,

      }
    ]
  },
  {
      title: 'Stock Screener',
      path: '/dashboard/stock-screener',
      // icon: <AiIcons.AiOutlineStock />,
  },
  {
    title: 'Time Series',
    path: '/dashboard/time-series',
    // icon: <MdIcons.MdTimeline />,
},
  {
    title: 'Buy-Sell-Calc',
    path: '/dashboard/buy-sell-calc',
    // icon: <FaIcons.FaCalculator />,
},
 {
    title: 'Top Brokers',
    path: '/dashboard/top-brokers',
    // icon: <AiIcons.AiOutlineTable />,
},
 {
    title: 'Top Stocks',
    path: '/dashboard/top-stocks',
    // icon: <AiIcons.AiOutlineBarChart />,
},
{
  title: 'Advance-Decline',
  path: '/dashboard/adv-dec',
  // icon: <BsIcons.BsArrowsAngleContract />,
},
{
  title: 'Technical-Analysis',
  path: '/dashboard/technical-analysis-chart',
  // icon: <SiIcons.SiAudioTechnica />,
},
{
  title: 'OHLC_VOl',
  path: '/dashboard/plot-ohlc-vol',
  // icon: <SiIcons.SiAudioTechnica />,
},
{
  title: 'Return Bar',
  path: '/dashboard/periodic-return-bar',
  // icon: <SiIcons.SiAudioTechnica />,
},
]