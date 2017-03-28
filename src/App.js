  import React from 'react';
  var ReactDOM = require('react-dom');

    // var SelectBox = React.createClass({
    //   render: function(){
    //        return (
    //          <div className="col-md-10">
    //         <input type="text" placeholder="Search" />
    //         Sort by:
    //         <select>
    //           <option value="name">Alphabetical</option>
    //           <option value="age">Newest</option>
    //         </select>
    //          </div>
    //         );
    //       }
    //    });

//      ==============================ARTICLE==============================


var Article = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      bigText: React.PropTypes.string.isRequired
    })
  },

  getInitialState: function() {
    return {
      visible: false
    };
  },

  readmoreClick: function(event) {
    event.preventDefault();
    this.setState({visible: true});
  },

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

//==============================NEWS==============================//

var News = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  onTotalNewsClick: function(){
    this.setState({counter: ++ this.state.counter });
  },
  
  render:function(){
    var data = this.props.data;
    var newsTemplate;

    if (data.length > 0) {
      newsTemplate = data.map(function(item, index) { 

        // Array method map = created new array and dispaly elements. 
        //Save array in var newsTemplate 

        return (
        <div key={index}>                             
        <Article data={item} />
        </div>
        )
      })
    } else {
      newsTemplate = <p>No news</p>
    }

    return (
    <div className="news"> 
    {newsTemplate}
    <strong className={'news__count ' + (data.length > 0 ? '':'none')}>Total news: {data.length}</strong>
    </div>
    );
  }
});

//==============================ADD==============================//

var Add = React.createClass({  
  getInitialState: function() {
    return {
      myValue: '',
      agreeNotChecked: true,
      authorIsEmpty: true,
      textIsEmpty: true
    };
  },

  onChangeHandler: function(event){
    this.setState({myValue: event.target.value})
  },

  onBtnClickHandler: function(e){   
    var author = ReactDOM.findDOMNode(this.refs.author).value;
    var text = ReactDOM.findDOMNode(this.refs.text).value;
    alert(author + '\n' + text);
  },


  onCheckRuleClick: function(e) {
   this.setState({agreeNotChecked: !this.state.agreeNotChecked});
  },

  onAuthorChange : function(e){
    if(e.target.value.trim().length>0){
      this.setState({authorIsEmpty:false})
    }else{
      this.state({authorIsEmpty:true})
    }
  },

  onTextChange : function(e){
    if(e.target.value.trim().length>0){
      this.setState({textIsEmpty:false})
    }else{
      this.state({textIsEmpty:true})
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
    Show alert
    </button> 
    </form>
    );
  }
});

//==============================APP==============================//

var App = React.createClass({
  render: function() {
    return (
    <div className="app">
    <h3>News</h3>
  <Add /> {/*added text input component*/}
<News data = {this.props.my_news}/> {/* added data attributes in components*/}
</div>

);
}
});

export default App; 