import React from 'react';
import TitleListEntry from './TitleListEntry';

class TitleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    }
  }

  _click = (e) => {

    if (e.target.id === 'TitleList') {
      this.state.flag ? this.setState({flag : false}) : this.setState({ flag: true });
    }
    
  }

  _keyCheck = (e) => {

   
    if (e.key === 'Enter') {
      let query = e.target.value;
      this.setState({ flag: false })
      this.props.addTitleList(query);
    } else if(e.key === 'Escape'){
      this.setState({ flag: false })
    }
  }

  render = () => {
    let titleList = this.props.titleList;
    let deleteTitleList = this.props.deleteTitleList;
    console.log(this.state.flag)
    if (!this.state.flag) {
      return (
        <div id='TitleList' onClick={this._click}>
          {titleList.map((item, index) => <TitleListEntry key={index} index={index} item={item} deleteTitleList={deleteTitleList}  selectChanger={this.props.selectChanger}/>)}
        </div>
      );
    } else {
      return (
        <div id='TitleList' onClick={this._click}>
          {titleList.map((item, index) => <TitleListEntry key={index} index={index} item={item} deleteTitleList={deleteTitleList} selectChanger={this.props.selectChanger} />)}
          <input className='form-control' id='newTitle' type='text' autoFocus='autofocus' onKeyDown={this._keyCheck} placeholder='Add for..'></input>
        </div>
      );
    }
  }
}


export default TitleList;