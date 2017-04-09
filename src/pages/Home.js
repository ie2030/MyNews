import React from 'react';
import News from '../components/news';
import Add from '../components/add';
var ReactDOM = require('react-dom');
window.ee = new EventEmitter();

//==============================APP==============================//
/*Default page*/

var Home = React.createClass({
  getInitialState: function() {
    return {
      news: this.props.my_news
    };
  },
componentDidMount: function(){
    // var self = this;
    window.ee.addListener('News.add', function(item){
    var nextNews = item.concat(self.state.news);
    self.setState({news: nextNews});
    });
  },
componentWillUnmount: function() {
    window.ee.removeListener('News.add');
  },
    render: function() {
    return (
    <div className="app">
  <h3>News</h3>                         
{/*added text input component*/}
<Add /> 
<News data = {this.state.news} /> 
{/* added data attributes in components*/}
</div>
);
}
});


export default Home