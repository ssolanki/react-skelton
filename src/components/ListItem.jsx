var React = require('react');
// creates object oriented class
var ListItem = React.createClass({
  render: function(){
    return (
      <li>
        <h4>{this.props.fruit}</h4>
      </li>
    );
  }
});

module.exports = ListItem;
