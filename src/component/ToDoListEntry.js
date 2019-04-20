import React from 'react';

class ToDoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag : false
    };
  }

  _onClick = (e) => {
    this.state.flag ? this.setState({ flag: false }) : this.setState({ flag: true })
  }

  _deleteList = (e) => {
    this.props.deleteList(this.props.index);
  }

  render () {
     
    if (!this.state.flag) {
      return (
        <div className="TitleListEntry" onClick={this._onClick}>
          <span>{this.props.item}</span>
        </div>

      );

    } else {
      return (
        <div className="TitleListEntry" onClick={this._onClick}>
          <span>{this.props.item}</span>
          <span className='glyphicon glyphicon-minus-sign plusMinus' id='minus' onClick={this._deleteList}></span>
        </div>

      );
    }
  }
}

export default ToDoListEntry;