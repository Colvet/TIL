import React, {Component} from 'react';
import './App.css';
import {Fragment} from 'react';
import MyIntro from './test';
import MyIntro2 from './myIntro2';
import Counter from './counter';



// class App extends Component{
//   render(){
//     let name = "KSH";
//     return (
//       <div className = "App-header">
//         Hello React with class type

//         Hello, {name};
//       </div>
//     );
//   }
// }

// class App extends Component{
//   render(){
//     const time =15;
//     const name = "KSH";

//     return(
//       <div className="App-header">
//         {
//           time < 15
//             ? (<div> Hello, {name} </div> )
//             : (<div> Bye, {name} </div> )
//         }
//       </div>
//     )
//   }
// }

// class App extends Component{
//   render(){
//     const time =18;
//     const name = "KSH";

//     return(
//       <div className="App-header">
//         {
//         (function () {
//           if(time>15) return (<div> Hello {name}</div>);
//         })()
//       }
//       </div>
//     )
//   }
// }

// class App extends Component{
//   render(){
//     const name = "KSH";
//     const css = {
//       color: 'red',
//       background: 'black',
//       padding: '20px',
//       fontSize: '25px'
//     };

//     return(
//       <div className='App-header'>
//         <div style={css}>Hello, {name} </div>
//       </div>
//     )
//   }
// }
 

// class App extends Component{
//   render() {
//     const person = {
//       name: "KSh",
//       phone: "010-1234-1234",
//       email: "test@gmail.com"
//     };

//     return (
//       <div>

//         <MyIntro person={person}/>
//         <MyIntro2 person={person}/>
//       </div>
//     )
//   }
// }

class App extends Component{
  render(){
    
    
    return (
      <Counter count={1}/>
    )
  }
}
export default App;
