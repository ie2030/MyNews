import React from 'react';
import Search from '../components/search';
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
      allNews: this.props.my_news,
      searching: false
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

    window.ee.addListener('News.edit', function(item){
        var allNews = self.state.news;
        allNews[item.index] = item;
        self.setState({
          news: allNews,
          allNews: allNews
        });
      
    });
    /*
      Eventlistener called when user search news
    */
    window.ee.addListener('News.search', function(query){
      var query_string = new RegExp(query, 'i');
      var searchNews = [];
      var allNews = self.state.allNews;
      if(query.length > 0){
        self.setState({searching: true});
        for(var i=0; i< allNews.length; i++){
          if(allNews[i].author.search(query_string) != -1 || allNews[i].text.search(query_string) != -1 || allNews[i].bigText.search(query_string) != -1 ){
            searchNews.push(allNews[i]);
          }
        }
        self.setState({news: searchNews});
      }else {
        var allNews = self.state.allNews;
        self.setState({
          searching: false,
          news: allNews
        });
      }
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
    window.ee.removeListener('News.add');
    window.ee.removeListener('News.delete');
    window.ee.removeListener('News.search');
    window.ee.removeListener('News.edit');
  },
    render: function() {
    return (
  <div className="app">
  <Search />
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