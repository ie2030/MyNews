import React from 'react';
var ReactDOM = require('react-dom');
window.ee = new EventEmitter();

/*
  Add News Component
*/

var Search = React.createClass({

	/*
    Called when 'query' textfield is changed
  */

	onQueryChange : function(e){
      window.ee.emit('News.search', e.target.value);
  },
 	
 	render: function(){
    return( 
        <div className="search">
          <span className="glyphicon glyphicon-search">Search:</span>
          <input type='text' onChange={this.onQueryChange} defaultValue='' placeholder='Search News...' ref='query'/>
        </div>
    );
  }
});


export default Search


//     doSearch:function(){
//         var query=this.refs.searchInput.getDOMNode().value; // this is the search text
//         this.props.doSearch(query);
//     },
//     render:function(){
//         return( 
//         	<div className="serach">
//         	<input type="text" ref="searchInput" placeholder="Search News" value={this.props.query} onChange={this.doSearch}/>
//         	</div>
//     );
//    }
// });