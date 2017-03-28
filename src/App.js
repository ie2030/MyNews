    import React from 'react';
    var ReactDOM = require('react-dom');
    window.ee = new EventEmitter();

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

        return (
        <div key={index}>                             
        <Article data={item} />
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

//==============================ADD==============================//

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

//==============================APP==============================//

var App = React.createClass({

  getInitialState: function() {
    return {
      news: this.props.my_news
    };
  },

componentDidMount: function(){
    var self = this;
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

export default App; 