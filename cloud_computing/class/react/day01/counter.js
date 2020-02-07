import React, {Component} from 'react';

const ErrorObject= () =>{
    throw(new Error('에러 발생'));
}

class Counter extends Component{

    state = {
        count: this.props.count,
        error : false,
        info: {
            name : "KSH",
            age : 10
        }
    };

    handleIncrease = () => { 
        this.setState({
            count: this.state.count + 1
        });
     };

    handleDecrease = () =>{
        this.setState({
            count: this.state.count - 1
        });
    };

    changeInfo = () => {
        this.setState({
            info :{
                ...this.state.info,
                name : "fnvmdm"
                
            }
        });
    };

    constructor(props){
        super(props);
        console.log('constructor');
    };

    componentWillMount(){
        console.log('componentwillMount')
    };

    componentDidMount(){
        console.log('componentDidMount')
    };
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
        if(nextState.number %5 ===0 ) return false;
        return true;
    };

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate');
    }

    componentDidUpdate(nextProps, nextState){
        console.log('componentDidUpdate');
    };

    componentDidCatch(error, info){
        this.setState({
            error: true
        });
    }

    
    render(){
        if(this.state.error){
            return(
            <h1>에러가 발생하였습니다.</h1>
            )};
        return(
            <div>
                <h1>Counter</h1>
                <h1 > {this.state.count} </h1>
                {this.state.count ==3 && <ErrorObject/>}
                <button onClick={this.handleIncrease}> + </button>
                <button onClick={this.handleDecrease}> - </button>
                <button onClick={this.changeInfo}> change Info name</button>
                <h1>{this.state.info.name} / {this.state.info.age} </h1>
                
            </div>
        )
    }
}

export default Counter;
