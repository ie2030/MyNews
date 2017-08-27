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
    Called when user click 'Delete' button
  */

   deleteArticle: function(event){
    event.preventDefault();
    window.ee.emit('News.delete', this.props.data.index);
  },

  /*
    Called when user click 'Details' button
  */
  readmoreClick: function(event) {
    event.preventDefault();
    this.setState({visible: true});
  },

 /*
    Called when user click 'Edit' button
  */

 editArticle: function(event){
    event.preventDefault();
    this.setState({editing: true});
    ReactDOM.findDOMNode(this.refs.author).focus();
    ReactDOM.findDOMNode(this.refs.author).value = this.props.data.author;
    ReactDOM.findDOMNode(this.refs.text).value = this.props.data.text;
   
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
    <button onClick={this.editArticle} className="btn-first btn btn-primary">Edit</button>
    < button onClick={this.deleteArticle} className="btn btn-danger"><span className="glyphicon glyphicon-trash"></span>Delete</button> 
    </div>

    )
  }
});

export default Article;