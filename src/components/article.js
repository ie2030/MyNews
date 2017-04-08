import React from 'react';
var ReactDOM = require('react-dom');
window.ee = new EventEmitter();

  //      ==============================ARTICLE==============================
import React from 'react';
var ReactDOM = require('react-dom');
window.ee = new EventEmitter();

var Article = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired
    })
  },
  getInitialState: function() {
    return {
      visible: false
    };
  },
  /*
    Called when user click 'Details' string
  */
  readmoreClick: function(event) {
    event.preventDefault();
    this.setState({visible: true});
  },
  /*
    Render Component
  */
      render:function(){
      var author = this.props.data.author,  //  added immutable data  = added props in render 
      text = this.props.data.text,
      bigText = this.props.data.bigText,
      visible = this.state.visible;
      return(
        <div className='article'>
        <p className='news__author'>{author}:</p>
        <p className='news__text'>{text}:</p>
      {/*for readmore link if visible === true do not show link*/}
      <a href="#" onClick={this.readmoreClick} className={'news__readmore ' + (visible ? 'none': '')}>Details</a>   
    {/*for big text: do not show text if visible === false*/}
    <p className={'news__bigText ' + (visible ? '' : 'none')}>{bigText}</p>  
    </div>
    )
  }
});

export default Article