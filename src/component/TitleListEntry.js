import React, { Component } from 'react';

class TitleListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    }
  }

  _onClick = (e) => {
    this.state.flag ? this.setState({ flag: false }) : this.setState({ flag: true })
    this.props.selectChanger(this.props.item)
  }

  _deleteTitle = (e) => {
    this.props.deleteTitleList(this.props.index);
  }

  render() {

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
          <span className='glyphicon glyphicon-minus-sign plusMinus' id='minus' onClick={this._deleteTitle}></span>
        </div>

      );
    }
  }
}

export default TitleListEntry;