  import React from 'react';

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



    var Article = React.createClass({
      
      propTypes: {
      data: React.PropTypes.shape({
        author: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired
      })
     },

     render:function(){
    var author = this.props.data.author,  //  added immutable data  = added props in render 
    text = this.props.data.text,
    bigText = this.props.data.bigText;

    return(
      <div className='article'>
      <p className='news__author'>{author}:</p>
      <p className='news__text'>{text}:</p>
      <p className='news_bigText'>{bigText}:</p>
      </div>
      )
  }
});

    var News = React.createClass({
      propTypes: {
        data: React.PropTypes.array.isRequired
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
        <strong className={'news__count ' + (data.length > 0 ? '':'none') }>Total news: {data.length}</strong>
        </div>
        );
      }
    });


    var App = React.createClass({
      render: function() {
        return (
        <div className="app">
        <h3>News</h3>
      <News data = {this.props.my_news}/>  {/* added data attributes in components*/}
      </div>
      );
    }
  });
  export default App;