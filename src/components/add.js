
//============================ADD============================//
import React from 'react';
var ReactDOM = require('react-dom');
window.ee = new EventEmitter();
  


var Add = React.createClass({  
  getInitialState: function() {
    return {
      agreeNotChecked: true,
      authorIsEmpty: true,
      textIsEmpty: true
    };
  },
  componentDidMount: function() {
    ReactDOM.findDOMNode(this.refs.author).focus();
  },
  
  onBtnClickHandler: function(e) {
    e.preventDefault();

    var textEl = ReactDOM.findDOMNode(this.refs.text);
    var author = ReactDOM.findDOMNode(this.refs.author).value;
    var text = textEl.value;

    var item = [{
      author: author,
      text: text,
      bigText: '...'
    }];

    window.ee.emit('News.add', item);
    textEl.value = '';
    this.setState({textIsEmpty: true});
  },


  onCheckRuleClick: function(e) {
   this.setState({agreeNotChecked: !this.state.agreeNotChecked});
 },

 onAuthorChange : function(e){
  if(e.target.value.trim().length > 0){
    this.setState({authorIsEmpty:false})
  }else{
    this.setState({authorIsEmpty:true})
  }
},

onTextChange : function(e){
  if(e.target.value.trim().length>0){
    this.setState({textIsEmpty:false})
  }else{
    this.setState({textIsEmpty:true})
  }
},

render: function(){

  var agreeNotChecked = this.state.agreeNotChecked,
  authorIsEmpty = this.state.authorIsEmpty,
  textIsEmpty = this.state.textIsEmpty;

  return( 
  <form className = 'add cf'>
  <input
  type='text'
  className='add__author'
  onChange={this.onAuthorChange}
  defaultValue=''
  placeholder='Your Name'
  ref='author'
  />
  <textarea 
  className='add__text' 
  onChange={this.onTextChange}
  defaultValue='' 
  placeholder='Add News text' 
  ref='text'>
  </textarea>
  <label className='add__checkrule'>
  <input type='checkbox' defaultChecked={false} ref='checkrule' onChange={this.onCheckRuleClick} />I agree 
  </label>
  <button 
  className='add__btn' 
  onClick={this.onBtnClickHandler} 
  disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}
  ref='alert_button' >
  Add News
  </button> 
  </form>
  );
}
});

export default Add