import React, {Component} from 'react';

class PhoneForm extends Component{
    state = {
        name : '',
        phone : ''
    };

    handleChange = (e) => {
        // console.log(e.target.name + '/' + e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        });
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name : '',
            phone : ''
        });
    }

    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <input
                    value = {this.state.name}
                    placeholder='이름을 입력하세요' 
                    onChange={this.handleChange}
                    name='name'/>
                <input 
                    value = {this.state.phone}
                    placeholder='전화번호 입력하세요'
                    onChange={this.handleChange}
                    name='phone'/>
                <button
                type = "submit" > 등록 </button>
            </form>
        );
    }
}

export default PhoneForm;