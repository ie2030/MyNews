import React, { Component } from 'react';
import Navigation from './components/navigation';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Link from 'react-router/Link';

var my_news = [
{
  'author': 'IT News',
  'text': 'THE WEEK IN APPLE NEWS: IPHONE 8 RUMORS, MARCH IPAD EVENTS RUMORS, APPLE PARK OPENING IN APRIL, AND MORE',
  'bigText': 'There are rumors of an iPad event next month, and we’re seeing more speculation about the next iPhone as the year progresses. But besides anything i-related, there are plenty of Apple-related headlines in this week’s roundup. Check them out in this slideshow. Just click on the link to get more information.'
},
{
  'author': 'IT News',
  'text': 'THE WEEK IN APPLE NEWS: IPHONE 8 RUMORS, MARCH IPAD EVENTS RUMORS, APPLE PARK OPENING IN APRIL, AND MORE',
  'bigText': 'At its Spring Forward event in March 2015 the company launched the first-gen Apple Watch (which had been previewed in autumn the year before) and announced the 12-inch MacBook (and, less excitingly, new MacBook Air models with Broadwell processors). Then in March 2016 Apple unveiled the iPhone SE and 9.7-inch iPad Pro, as well as the iOS 9.3 point update, and some new straps for the Apple Watch.'
},
{
  'author': 'IT News',
  'text': 'TOSHIBA REVEALS NEW 3D FLASH CHIP THAT CAN STORE 1TB',
  'bigText': 'With this in mind, we expect Apple to organise a third spring launch event in March 2017. In this article we discuss likely dates for Apple spring extravaganza, and then explore the various products we think the company will announce, and the chances of each one appearing. The products are arranged in order of likelihood, beginning with the sure bets and moving through the fifty-fifty bets to the long shot.'
},
{

  'author': 'IT News',
  'text': 'PLEASE VISIT: http://www.itnews.com/',
  'bigText': 'Apple spring event in 2015 took place on 9 March, a Monday. The company spring event the following year was on 21 March 2016, which was also a Monday. Clearly a Monday in mid-March seems like a fair bet, and at time of writing (6 March) the invites have not been sent out yet, so our money would be on 20 March 2017. There is usually around a week to 10 days between invites and event.'
}
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <div className="container">
            <Match exactly pattern="/" component={() => (<Home my_news={my_news} />)} />
            <Match pattern="/about" component={About} />
            <Match pattern="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;


