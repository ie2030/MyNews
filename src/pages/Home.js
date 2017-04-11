import React from 'react';
// import Search from '../components/search';
import News from '../components/news';
import Add from '../components/add';
var ReactDOM = require('react-dom');
window.ee = new EventEmitter();

//==============================APP==============================//
/*Default page*/

var Home = React.createClass({
  getInitialState: function() {
    return {
      news: this.props.my_news,
      allNews: this.props.my_news
    };
  },
componentDidMount: function(){
    var self = this;

    /*
      Eventlistener called when user click 'AddNews' button
    */

    window.ee.addListener('News.add', function(item){
    var nextNews = item.concat(self.state.news);
    self.setState({news: nextNews});
  });
  

  /*
      Eventlistener called when user click 'Delete' button
  */
    window.ee.addListener('News.delete', function(index){
        var allNews = self.state.news;
        allNews.splice(index, 1);
        self.setState({
          news: allNews,
          allNews: allNews    
        });   
  });
},

componentWillUnmount: function() {
    // window.ee.removeListener('News.search');
    window.ee.removeListener('News.add');
     window.ee.removeListener('News.delete');
  },
    render: function() {
    return (
    <div className="app">
  <h3><span className="glyphicon glyphicon-globe"></span>News</h3>                         
{/*added text input component*/}
<Add /> 
<News data = {this.state.news} /> 
{/* added data attributes in components*/}
</div>
);
}
});

export default Home