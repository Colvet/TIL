import React, { Component } from 'react';


class SearchBar extends Component{
    
    onInputChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            term: event.target.value
        });
        // console.log(this.state.term);
        
    };

    render(){
        return(
            <div>
                <input onChange={this.onInputChange} name = 'term'/>
                {/* <div>Value of the input: {this.state.term}</div> */}


            </div>
            // <input onChange={event => console.log(event.target.value)}/>
            
        )
    }
}

export default SearchBar;