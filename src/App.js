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

var News = React.createClass({
  render: function() {
    var data = this.props.data;
    var newsTemplate = data.map(function(item, index) {
      return (
        <div key={index}>
          <p className="news__author">{item.author}:</p>
          <p className="news__text">{item.text}</p>
          <p className="news_bigText">{item.bigText}</p>
        </div>
      )
    })

    return (
      <div className="news">
        {newsTemplate}
      </div>
    );
  }
});

var Comments = React.createClass({
  render: function() {
    return (
      <div className="comments">
        Нет новостей - комментировать нечего
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        Всем привет, я компонент App! Я умею отображать новости.
        <News data={this.props.my_news} />
        <Comments />
      </div>
    );
  }
});
  
export default App;