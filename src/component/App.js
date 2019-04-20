import React, { Component } from 'react';
import Nav from './Nav';
import TitleList from './TitleList';
import ToDoList from './ToDoList';
import SearchResult from './SearchResult';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleList: [],
      selectTitle: null,
      toDoList: {},
      search: ''
    }
  }

  _selectChanger = (title) => {
    this.setState({ selectTitle: title });
  }


  _addToDoList = (query) => {
    let newObj = { ...this.state };
    let target = newObj.toDoList[newObj.selectTitle];
    target.push(query);

    this.setState(newObj);

  }

  _deleteToDoList = (index) => {
    let newObj = { ...this.state };
    newObj.toDoList[newObj.selectTitle].splice(index, 1);

    this.setState(newObj);
  }

  _addTitleList = (query) => {

    let toDoList = { ...this.state.toDoList };
    toDoList[query] = [];
    this.setState({ titleList: [...this.state.titleList, query], toDoList });
  }

  _deleteTitleList = (index) => {
    let newObj = { ...this.state };
    delete newObj.toDoList[newObj.selectTitle]
    newObj.titleList.splice(index, 1);
    newObj.selectTitle = '';

    this.setState({ newObj });
  }


  _search = (query) => {
    this.setState({ search: query })
  }

  render() {

    let toDoList = this.state.toDoList[this.state.selectTitle];

    if (this.state.search === '') {
      return (
        <div id='app' className="row" >
          <div id="left" className="col-md-4">
            <Nav search={this._search} />
            <div id='title'><h2>Title</h2></div>
            <TitleList titleList={this.state.titleList} addTitleList={this._addTitleList} deleteTitleList={this._deleteTitleList} selectChanger={this._selectChanger} />
            <div id='add'>
              <span className="glyphicon glyphicon-plus-sign plusMinus" ></span>
              <span> 목록추가</span>
            </div>
          </div>
          <div id='right' className="col-md-8">
            <div id='subTitle'><h2>To Do List</h2></div>
            <ToDoList toDoList={toDoList} addToDoList={this._addToDoList} deleteToDoList={this._deleteToDoList} />
          </div>
        </div>
      );
    } else {
      return (
        <div id='app' className="row" >
        <div id="left" className="col-md-4">
          <Nav search={this._search} />
          <div id='title'><h2>Title</h2></div>
          <TitleList titleList={this.state.titleList} addTitleList={this._addTitleList} deleteTitleList={this._deleteTitleList} selectChanger={this._selectChanger} />
          <div id='add'>
            <span className="glyphicon glyphicon-plus-sign plusMinus" ></span>
            <span> 목록추가</span>
          </div>
        </div>
        <div id='right' className="col-md-8">
          <div id='subTitle'><h2>To Do List</h2></div>
          <SearchResult allList={this.state.toDoList} search={this.state.search}/>
        </div>
      </div>
      );
    }


  }
}

export default App;
