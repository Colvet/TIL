import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneForm from './PhoneForm';
import PhoneList from './phonelist';

class App extends Component{
  id = 1;
  state = {
    contacts :[
      {
        id : 0,
        name : '관리자',
        phone : '010-1234'
      }
    ]
  };

  handleCreate = (data) => {
    // console.log(data);
    const {contacts} = this.state;
    this.setState({
      contacts : contacts.concat({id : this.id++, ...data})
    })
    
  }
  handlerRemove = (id) => {

    const { contacts } = this.state;
    this.setState({

      contacts: contacts.filter(info => info.id != id)

    });
    console.log(this.state.contacts);

  }

  handleUpdate = (id, data) => {
    const { contacts } = this.state;
    // console.log("id: " + id);
    this.setState({
      
      contacts : contacts.map(item => item.id === id 
        ? {...item, ...data} 
        : item)
    });
    
  };

  render(){
    // console.log(this.state);
    // console.log(this.state.contacts);
    const { contacts } = this.state;
    return (
      <div>
        <PhoneForm
          onCreate = {this.handleCreate} />
          
        <PhoneList 
          data = {this.state.contacts}
          onRemove = {this.handlerRemove}
          onUpdate = {this.handleUpdate} />
        

        {JSON.stringify(contacts)}
      </div>
    );
  }
}

export default App;
