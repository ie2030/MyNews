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
    return (
      <div className="news">
       No news so far!!!
      </div>
    );
  }
});

var Comments = React.createClass({
  render: function() {
    return (
      <div className="comments">
        Not new - not comments
      </div>
    );
  }
});

  var NewsApp = React.createClass({
  render: function() {
    return (
      <div className="app">
        Hello!!! I am component News App and can display news!!!!
        <News   />
        <Comments />
      </div>
    );
  }
});
  
export default NewsApp;