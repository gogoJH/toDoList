import React from 'react';
import ToDoListEntry from './ToDoListEntry';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    }
  }

  _click = (e) => {
    if (e.target.id === 'ToDoList') {
      this.state.flag ? this.setState({ flag: false }) : this.setState({ flag: true });
    }
  }

  _keyCheck = (e) => {
    if (e.key === 'Enter') {
      let query = e.target.value;
      this.setState({ flag: false })
      this.props.addToDoList(query);
    } else if (e.key === 'Escape') {
      this.setState({ flag: false })
    }
  }

  render() {

    let toDoList = this.props.toDoList;
    let deleteList = this.props.deleteToDoList;
    
    if (toDoList) {
      if (toDoList.length !== 0) {
        if (!this.state.flag) {
          return (
            <div id='ToDoList' onClick={this._click}>
              {toDoList.map((item, index) => <ToDoListEntry key={index} index={index} item={item} deleteList={deleteList}/>)}
            </div>
          );
        } else {
          return (
            <div id='ToDoList' onClick={this._click}>
              {toDoList.map((item, index) => <ToDoListEntry key={index} index={index} item={item} deleteList= {deleteList} />)}
              <input className='form-control' id='newTitle' type='text' autoFocus='autofocus' onKeyDown={this._keyCheck} placeholder='Add for..'></input>
            </div>
          );
        }
      } else {
        if (!this.state.flag) {
          return (
            <div id='ToDoList' onClick={this._click}>
            <div><h3>List를 추가하시려면 빈 곳을 클릭해주세요.</h3></div>
            </div>
          );
        } else {
          return (
            <div id='ToDoList' onClick={this._click}>
            <div><h3>List를 추가하시려면 빈 곳을 클릭해주세요.</h3></div>
              <input className='form-control' id='newTitle' type='text' autoFocus='autofocus' onKeyDown={this._keyCheck} placeholder='Add for..'></input>
            </div>
          );
        }
      }
    } else {
      return <div><h3>Title를 생성하고 선택해주세요!</h3> </div>
    }

  }
}

export default ToDoList;