import React from 'react';
import Article from './article';
var ReactDOM = require('react-dom');
window.ee = new EventEmitter();


var News = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  getInitialState: function() {
    return {
      counter: 0
    }
  },
  render:function(){
    var data = this.props.data;
    var newsTemplate;
    if (data.length > 0) {
      newsTemplate = data.map(function(item, index) { 
        // Array method map = created new array and dispaly elements. 
        //Save array in var newsTemplate
        var newsItem = item;
        newsItem.index = index;
        return (
          <div key={index}>                             
            <Article data={newsItem} />
          </div>
        )
      })
    } else {
      newsTemplate = <p>No News</p>
    }
    return (
      <div className="news"> 
        {newsTemplate}
        <strong className={'news__count ' + (data.length > 0 ? '':'none')}>Total news: {data.length}</strong>
      </div>
    );
  }
});

export default News