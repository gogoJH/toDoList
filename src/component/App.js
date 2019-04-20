import React, { Component } from 'react';
import Nav from './Nav';
import TitleList from './TitleList';
import ToDoList from './ToDoList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleList : [],
      selectTitle : null,
      toDoList : {},
      search : ''
    }
  }

  _selectChanger = (title) => {
    this.setState({selectTitle : title});
  }


  _addToDoList = (query) => {
    // let newObj = {...this.state};
    // let target = newObj.toDoList[newObj.selectTitle];
    // target = [...target, query];

    // console.log(target)
   
  }

  _addTitleList = (query) => {

    let toDoList = {...this.state.toDoList};
    toDoList[query] = [];
    this.setState({titleList : [...this.state.titleList, query], toDoList});
  }

  _deleteTitleList = (index) => {
    
    let current = this.state.titleList.slice();
    current.splice(index, 1);
    this.setState({titleList : current});
  }

  render() {

      let toDoList = this.state.toDoList[this.state.selectTitle];

      console.log(toDoList)
      return (
        <div id='app' className="row" >
          <div id="left" className="col-md-4">
            <Nav />
            <div id='title'><h2>Title</h2></div>
            <TitleList titleList={this.state.titleList} addTitleList={this._addTitleList} deleteTitleList={this._deleteTitleList} selectChanger={this._selectChanger}/>
            <div id='add'>
              <span className="glyphicon glyphicon-plus-sign plusMinus" ></span>
              <span> 목록추가</span>
            </div>
          </div>
          <div id='right' className="col-md-8">
          <div id='subTitle'><h2>To Do List</h2></div>
            <ToDoList toDoList={toDoList}/>
          </div>
        </div>
      );
    

    
  }
}

export default App;
